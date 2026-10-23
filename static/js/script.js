document.addEventListener('DOMContentLoaded', function() {

    // 1. Al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets"
    const enviaFlores = document.getElementById('envia-flores');
    
    if (enviaFlores) {
        enviaFlores.addEventListener('mouseenter', function() {
            this.textContent = 'Envía Bouquets';
        });

        enviaFlores.addEventListener('mouseleave', function() {
            this.textContent = 'Envía Flores';
        });
    }

    // 2. Al hacer click en "Iniciar Sesión", muestra una alerta con la bienvenida
    const btnLogin = document.getElementById('btn-login');
    
    if (btnLogin) {
        btnLogin.addEventListener('click', function() {
            alert('Bienvenido a la tienda de flores');
        });
    }

    // 3. Al hacer click en los botones "Comprar", desaparece ese botón en específico
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    
    botonesComprar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            this.style.display = 'none';
        });
    });

});