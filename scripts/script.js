function toggleDropdown() {
    const button = document.querySelector('.dropdown-button');
    const dropdownContent = document.getElementById("departamentosDropdown");
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    button.setAttribute('aria-expanded', !isExpanded);
    dropdownContent.classList.toggle("show");
}

// Cerrar el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button') && !event.target.matches('.arrow-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        const buttons = document.getElementsByClassName("dropdown-button");
        
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
                buttons[i].setAttribute('aria-expanded', 'false');
            }
        }
    }
}
// Función para manejar el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const jobSearchForm = document.getElementById('job-search-form');
    const jobKeywordInput = document.getElementById('job-keyword');
    const jobDepartmentSelect = document.getElementById('job-department');
    const jobList = document.getElementById('job-list');

    if (jobSearchForm) {
        jobSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const keyword = jobKeywordInput.value.toLowerCase();
            const department = jobDepartmentSelect.value.toLowerCase();

            const jobItems = jobList.querySelectorAll('.job-item');
            jobItems.forEach(function(item) {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('.job-description').textContent.toLowerCase();
                const itemDepartment = item.dataset.department.toLowerCase();

                const keywordMatch = title.includes(keyword) || description.includes(keyword);
                const departmentMatch = department === '' || itemDepartment === department;

                if (keywordMatch && departmentMatch) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }
  
  // Verificar el tema guardado al cargar la página
  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  });
  /*let lastScrollTop = 0;
        const header = document.getElementById('header');
        const scrollThreshold = 200; // Ajusta este valor según tus necesidades

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                // Scroll hacia abajo
                header.classList.remove('visible');
            } else {
                // Scroll hacia arriba o en la parte superior
                header.classList.add('visible');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);*/

        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        }

        // Verificar el tema guardado al cargar la página
        document.addEventListener('DOMContentLoaded', (event) => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        });
        
        let isNavOpen = false;

        function toggleNav() {
            if (isNavOpen) {
                closeNav();
            } else {
                openNav();
            }
        }

        function openNav() {
            document.getElementById("mySidebar").style.left = "0";
            document.getElementById("overlay").style.display = "block";
            document.getElementById("openbtn").style.left = "250px";
            isNavOpen = true;
        }

        function closeNav() {
            document.getElementById("mySidebar").style.left = "-250px";
            document.getElementById("overlay").style.display = "none";
            document.getElementById("openbtn").style.left = "0";
            isNavOpen = false;
        }

        let lastScrollTop = 0;
        const header = document.getElementById('header');
        const scrollThreshold = 200;

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                header.classList.remove('visible');
            } else {
                header.classList.add('visible');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);

        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        });

         /* const webhookURL = 'https://discord.com/api/webhooks/1328924328258965596/9C5u3wch0V0lAGsV--NLe7A6V88NO8rusBGq4vovy3n6VGBf_EXnj3YhzYsZFQpcyR-5'; 

          document.getElementById('discordForm').addEventListener('submit', function(e) {
            e.preventDefault();
              
              /*const name = document.getElementById('name').value;
              const discord = document.getElementById('discord').value;
              const steam = document.getElementById('steam').value;
              const email = document.getElementById('email').value;
              
              const urgent = document.querySelector('input[name="urgent"]:checked').value;
              const otherReason = document.getElementById('otherReason').value;
              const tiempo = document.getElementById('tiempo').value;
              const per01 = document.getElementById('per01').value;
              const rol = document.getElementById('rol').value;
              const name02 = document.getElementById('name02').value;
              const nacionalidad = document.getElementById('nacionalidad').value;
              const department = document.getElementById('department').value;
              const laboral = document.getElementById('laboral').value;
              const contrato = document.getElementById('contrato').value;
              const tratamiento = document.getElementById('tratamiento').value;
              const message = document.getElementById('message').value;
              const edadValue = document.getElementById('edad').value.trim();
              const edadValue2 = document.getElementById('ooc').value.trim();

    // Validar que "edad" sea un número entero positivo
    if (!/^\d+$/.test(edadValue) || Number(edadValue) < 0) {
        document.getElementById('status').textContent = 'Por favor, ingrese una edad válida (número entero positivo).';
        return;
    }
    const edad = parseInt(edadValue, 10);

    if (!/^\d+$/.test(edadValue2) || Number(edadValue2) < 0) {
        document.getElementById('status').
        return;textContent = 'Por favor, ingrese una edad válida (número entero positivo).';
    }
    const ooc = parseInt(edadValue, 10);
              let urgentResponse = urgent;
            if (urgent === 'Otro') {
                urgentResponse += `: ${otherReason}`;
            }

              const data = {
                embeds: [{
                    title: '📄 Nueva Postulación',
                    description: 'Se ha recibido una nueva postulación con los siguientes detalles:',
                    fields: [
                        { name: '', value: '\u200B' },
                        { name: '-----🔗 Datos OOC 🔗-----', value: '\u200B' },
                        { name: '🎮 Discord ID', value: discord, inline: false },
                        { name: '🎮 Steam', value: steam, inline: true },
                        { name: '📧 Correo Electrónico', value: email, inline: false },
                        { name: '🎂 Edad OOC', value: edad.toString(), inline: false },
                        { name: '❌ Tienes alguna sanción o reporte', value: urgentResponse },
                        { name: '🕐 Disponibilidad de Tiempo: Días y Horario', value: tiempo, inline: false },
                        { name: '🧑‍🔧 ¿A qué se dedica tu personaje actualmente?', value: per01, inline: false },
                        
                        { name: '', value: '\u200B' },
                        { name: '🙍 ¿Alguna vez has desarrollado un rol de este estilo?', value: rol, inline: false },
                        { name: '-----📋 Datos IC 📋-----', value: '\u200B' },
                        { name: '⭐ Nombre y Apellido IC', value: name02, inline: true },
                        { name: '🎂 Edad IC', value: edad.toString(), inline: true },
                        { name: '🌐 Nacionalidad', value: nacionalidad, inline: true },
                        { name: '🏢 Secretaria', value: department, inline: false },
                        { name: '💼 ¿Cual es su experiencia laboral?', value: laboral, inline: false },
                        { name: '📋 ¿Por qué cree que deberíamos contratarle?', value: contrato, inline: false },
                        { name: '⚖️ Acepta el tratamiento de Información', value: tratamiento, inline: false},
                        { name: '📨 ¿Como cree que podría aportar positivamente al Gobierno de San Andreas?', value: message, inline: false }
                    ],
                    color: 16766720, // Dorado
                    timestamp: new Date().toISOString(), // Muestra la fecha y hora
                    footer: {
                        text: 'Postulaciones Automáticas',
                        icon_url: 'https://i.ibb.co/D9hjqdb/SAGOV-3.png' // URL opcional para un icono en el pie
                    }
                }]
            };
              
            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('status').textContent = 'Mensaje enviado con éxito!';
                    document.getElementById('discordForm').reset();
                    document.getElementById('otherReasonContainer').style.display = 'none';
                } else {
                    document.getElementById('status').textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('status').textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
            });
        });

        // Mostrar/ocultar el campo de texto para "Otro" razón
        document.querySelectorAll('input[name="urgent"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const otherReasonContainer = document.getElementById('otherReasonContainer');
                if (this.value === 'Otro') {
                    otherReasonContainer.style.display = 'block';
                } else {
                    otherReasonContainer.style.display = 'none';
                }
            });
        });*/

        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        });

        //form
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        function updateUserInfo() {
            const userInfo = document.getElementById('userInfo');
            const postForm = document.getElementById('postForm');
            if (currentUser) {
                let extraLinks = '';
                if (currentUser.username === 'Direccion') {
                    extraLinks = ' | <a href="personnel-management.html">Gestión de Personal</a>';
                }
                userInfo.innerHTML = `
                    <button class="agregar" id="logoutButton">Cerrar Sesión</button>${extraLinks}
                    <h2> Bienvenido, ${currentUser.username}!</h2>
                `;
                document.getElementById('logoutButton').addEventListener('click', logout);
                postForm.style.display = 'block';
            } else {
                userInfo.innerHTML = `
                    <button class="agregar" id="loginButton">Iniciar Sesión</button>
                `;
                document.getElementById('loginButton').addEventListener('click', () => {
                    window.location.href = 'login.html';
                });
                postForm.style.display = 'none';
            }
        }

        function logout() {
            localStorage.removeItem('currentUser');
            currentUser = null;
            updateUserInfo();
            loadPosts();
        }

        function loadPosts() {
            const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
            displayPosts(posts);
        }

        function displayPosts(posts) {
            const postsContainer = document.getElementById('posts');
            postsContainer.innerHTML = '';
            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Imagen de la publicación">` : ''}
                    <div class="meta">Publicado por: ${post.author} el ${new Date(post.date).toLocaleString()}</div>
                    ${currentUser && currentUser.username === 'director' ? 
                        `<button class="deleteButton" data-index="${index}">Eliminar</button>` : ''}
                `;
                postsContainer.appendChild(postElement);
            });

            // Add event listeners for delete buttons
            if (currentUser && currentUser.username === 'Direccion') {
                document.querySelectorAll('.deleteButton').forEach(button => {
                    button.addEventListener('click', function() {
                        const index = this.getAttribute('data-index');
                        deletePost(index);
                    });
                });
            }
        }

        function deletePost(index) {
            const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
            posts.splice(index, 1);
            localStorage.setItem('forumPosts', JSON.stringify(posts));
            loadPosts();
        }

        function savePost(title, content, imageUrl) {
            if (!currentUser) {
                alert('Debes iniciar sesión para publicar.');
                return;
            }
            const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
            posts.unshift({
                title: title,
                content: content,
                imageUrl: imageUrl,
                author: currentUser.username,
                date: new Date().toISOString()
            });
            localStorage.setItem('forumPosts', JSON.stringify(posts));
            loadPosts();
        }

        document.getElementById('postForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('postTitle').value;
            const content = document.getElementById('postContent').value;
            const imageUrl = document.getElementById('imageUrl').value;
            if (title && content) {
                savePost(title, content, imageUrl);
                document.getElementById('postTitle').value = '';
                document.getElementById('postContent').value = '';
                document.getElementById('imageUrl').value = '';
            }
        });

        document.getElementById('searchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchTerm').value.toLowerCase();
            const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
            const filteredPosts = posts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.content.toLowerCase().includes(searchTerm)
            );
            displayPosts(filteredPosts);
        });

        updateUserInfo();
        loadPosts();
        

         //Login y register
        /* document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('forumUsers')) || [];
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'forum.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
        
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            const users = JSON.parse(localStorage.getItem('forumUsers')) || [];
            if (users.some(u => u.username === username)) {
                alert('El nombre de usuario ya está en uso');
                return;
            }

            users.push({ username, password });
            localStorage.setItem('forumUsers', JSON.stringify(users));
            alert('Registro exitoso. Por favor, inicia sesión.');
            window.location.href = 'login.html';
        });*/

        
        