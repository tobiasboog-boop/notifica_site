// Cloudflare Pages Function to list webinar registrations
// Protected endpoint - requires secret key

export async function onRequestGet(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  // Check for admin key in query params or header
  const url = new URL(request.url);
  const adminKey = url.searchParams.get('key') || request.headers.get('X-Admin-Key');

  // Simple protection - set WEBINAR_ADMIN_KEY in Cloudflare dashboard
  const expectedKey = env.WEBINAR_ADMIN_KEY || 'notifica-webinar-2026';

  if (adminKey !== expectedKey) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Unauthorized'
    }), {
      status: 401,
      headers: corsHeaders
    });
  }

  try {
    if (!env.WEBINAR_REGISTRATIONS) {
      return new Response(JSON.stringify({
        success: false,
        error: 'KV not configured'
      }), {
        status: 500,
        headers: corsHeaders
      });
    }

    // List all registrations
    const list = await env.WEBINAR_REGISTRATIONS.list({ prefix: 'webinar:stuurinformatie-2026:' });

    const registrations = [];
    for (const key of list.keys) {
      const value = await env.WEBINAR_REGISTRATIONS.get(key.name);
      if (value) {
        registrations.push(JSON.parse(value));
      }
    }

    // Sort by registration date (newest first)
    registrations.sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt));

    // Group by date
    const donderdag = registrations.filter(r => r.date === 'donderdag-29');
    const vrijdag = registrations.filter(r => r.date === 'vrijdag-30');

    return new Response(JSON.stringify({
      success: true,
      total: registrations.length,
      donderdag: {
        count: donderdag.length,
        registrations: donderdag
      },
      vrijdag: {
        count: vrijdag.length,
        registrations: vrijdag
      }
    }), {
      status: 200,
      headers: corsHeaders
    });

  } catch (error) {
    console.error('List error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Er ging iets mis'
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
