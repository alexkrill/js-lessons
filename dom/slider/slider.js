let offset = 0;
            const sliderBlock = document.querySelector('.slider__blocks');
            const nextArrow = document.querySelector('#next');
            const prevArrow = document.querySelector('#prev');

            nextArrow.addEventListener('click', function(){
                if (offset < 500){
                    offset += 100;
                }
                sliderBlock.style.left = -offset + 'px';
            });


            prevArrow.addEventListener('click', function(){
                if (offset > 0){
                    offset -= 100;
                }
                sliderBlock.style.left = -offset + 'px';
            });