/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function guardarProductos() {
            // Mostrar mensaje de alerta
            alert("Todos los productos han sido guardados de forma exitosa");

            // Desmarcar todos los checkboxes
            let checkboxes = document.querySelectorAll(".producto-check");
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });

            // Restablecer todos los inputs de número a 0
            let numeros = document.querySelectorAll(".cantidad");
            numeros.forEach(function(input) {
                input.value = 0;
            });
        }
