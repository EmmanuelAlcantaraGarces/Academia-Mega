const AuthModule = (function() {
    console-console.log("Simular obtencion de BD");

    const userDB = {
        username: "admin",
        password: "12345"
    }

    let currentUser = null;
    let mensaje = null;

    return {
        login(username, password) {
            if (username === userDB.username && password === userDB.password) {
                currentUser = UserSingleton.getInstance(username);
                console.log(`Usuario Autenticado: ${currentUser.name}`);
                mensaje = `Usuario Autenticado: ${currentUser.name}`;
            }
            else {
                console.log("Credenciales invalidas");
                mensaje = "Credenciales invalidas";
            }
        },

        logout() {
            if (currentUser) {
                console.log(`Cerrando sesion de ${currentUser.name}`)
                mensaje = `Cerrando sesion de ${currentUser.name}`;
                currentUser = null;
                UserSingleton.clearInstance();
            }
            else {
                console.log("No hay sesion abierta");
                mensaje = "No hay sesion abierta";
            }
        },

        getMessage() {
            if (mensaje === null)
                return "";

            return mensaje;
        }
    }
})();
