// Cloudflare Pages Function for webinar registration
// Stores registrations in KV and returns success

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await request.json();
    const { name, email, date, bedrijf } = data;

    // Validate required fields
    if (!name || !email || !date) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Naam, e-mail en datum zijn verplicht'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Validate date
    if (date !== 'donderdag-29' && date !== 'vrijdag-30') {
      return new Response(JSON.stringify({
        success: false,
        error: 'Ongeldige datum'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Create registration object
    const registration = {
      name,
      email,
      bedrijf: bedrijf || '',
      date,
      registeredAt: new Date().toISOString(),
      webinar: 'stuurinformatie-januari-2026'
    };

    // Generate unique key
    const key = `webinar:stuurinformatie-2026:${date}:${Date.now()}:${email.replace('@', '_at_')}`;

    // Store in KV (if KV binding exists)
    if (env.WEBINAR_REGISTRATIONS) {
      await env.WEBINAR_REGISTRATIONS.put(key, JSON.stringify(registration));
    } else {
      // Fallback: log to console (visible in Cloudflare dashboard)
      console.log('WEBINAR_REGISTRATION:', JSON.stringify(registration));
    }

    // Return success with calendar data
    const teamsLinks = {
      'donderdag-29': 'https://teams.microsoft.com/meet/38037240929084?p=nK0H0o6bwdiJrvL238',
      'vrijdag-30': 'https://teams.microsoft.com/meet/31157454727564?p=bjcOmrv089ThfowSWs'
    };

    const calendarData = {
      'donderdag-29': {
        title: 'Webinar: Stuurinformatie in de praktijk',
        date: '2026-01-29',
        startTime: '12:00',
        endTime: '12:30',
        description: 'Van analyse naar actie: leer hoe je inzichten uit je bedrijfsdata vertaalt naar concrete sturing.',
        location: teamsLinks['donderdag-29']
      },
      'vrijdag-30': {
        title: 'Webinar: Stuurinformatie in de praktijk',
        date: '2026-01-30',
        startTime: '12:00',
        endTime: '12:30',
        description: 'Van analyse naar actie: leer hoe je inzichten uit je bedrijfsdata vertaalt naar concrete sturing.',
        location: teamsLinks['vrijdag-30']
      }
    };

    return new Response(JSON.stringify({
      success: true,
      message: 'Je bent aangemeld!',
      calendar: calendarData[date],
      teamsLink: teamsLinks[date]
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Er ging iets mis. Probeer het opnieuw.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Handle OPTIONS for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
