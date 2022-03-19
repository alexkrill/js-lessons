const button = document.querySelector('#buttonOverlay');
        const body = document.body;

        button.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            overlay.addEventListener('click', function(event){
                if (event.target == overlay) {
                    close.click();
                }
            })

            const container = document.createElement('div');
            container.classList.add('overlay-container');

            const content = document.createElement('div');
            content.classList.add('content');

            content.innerHTML = 'Hello <b>world!</b>';

            const close = document.createElement('a')
            close.classList.add('close');
            close.textContent = 'x';
            close.href = '#';

            close.addEventListener('click', function(event){
                event.preventDefault();
                body.removeChild(overlay);
            })

            overlay.appendChild(container);
            container.appendChild(close);
            container.appendChild(content);
            body.appendChild(overlay);

        })