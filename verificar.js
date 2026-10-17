// El código de verificar.html: va aparte porque la política de seguridad de la web no deja
// código escrito dentro de la página.
(function () {
  var SUPABASE = 'https://issakeaknjhmkifwsfhg.supabase.co'
  // La clave pública de la app: la misma que lleva la app y la web, no da permiso a nada por sí sola.
  var CLAVE_PUBLICA = 'sb_publishable_rdlF_hitpM0XcZJ9OQtOeA_9mDpXatI'

  function ver(cual) {
    ;['comprobando', 'hecho', 'gastado', 'incompleto', 'sinRed'].forEach(function (id) {
      document.getElementById(id).hidden = id !== cual
    })
  }

  var token = new URLSearchParams(location.search).get('t')
  // Fuera de la barra de direcciones en cuanto se ha leído.
  try { history.replaceState(null, '', location.pathname) } catch (e) {}

  if (!token) return ver('incompleto')

  fetch(SUPABASE + '/auth/v1/verify', {
    method: 'POST',
    headers: { apikey: CLAVE_PUBLICA, 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'signup', token_hash: token }),
  })
    .then(function (respuesta) {
      if (respuesta.ok) return ver('hecho')
      // 403 es el enlace caducado o ya usado; cualquier otro rechazo, lo mismo para quien lo lee.
      if (respuesta.status >= 400 && respuesta.status < 500) return ver('gastado')
      ver('sinRed')
    })
    .catch(function () { ver('sinRed') })
})()
