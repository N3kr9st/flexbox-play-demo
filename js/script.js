document.addEventListener('DOMContentLoaded', function() {

    const container = document.getElementById('main-content');
    const buttonDir = document.getElementById('dir-toggle');
    const buttonJustify = document.getElementById('justify-toggle');
    const buttonAlign = document.getElementById('align-toggle');
    const buttonGap = document.getElementById('gap-toggle');



    buttonDir.addEventListener('click', () => {
    const currentDirection = getComputedStyle(container).flexDirection;

    if (currentDirection === 'column') {
        container.style.flexDirection = 'row';
        buttonDir.textContent = 'Wechsle zu row';
    } else {
        container.style.flexDirection = 'column';
        buttonDir.textContent = 'Wechsle zu column';
    }
    });

    buttonJustify.addEventListener('click', () => {
    const currentJustify = getComputedStyle(container).justifyContent;

    if (currentJustify === 'flex-start') {
        container.style.justifyContent = 'center';
        buttonJustify.textContent = 'Wechsle zu center';
    } else if (currentJustify === 'center') {
        container.style.justifyContent = 'space-between';
        buttonJustify.textContent = 'Wechsle zu space-between';
    } else if (currentJustify === 'space-between') {
        container.style.justifyContent = 'flex-end';
        buttonJustify.textContent = 'Wechsle zu flex-end';
    } else if (currentJustify === 'flex-end') {
        container.style.justifyContent = 'space-around';
        buttonJustify.textContent = 'Wechsle zu space-around';
    } else {
        container.style.justifyContent = 'flex-start';
        buttonJustify.textContent = 'Wechsle zu flex-start';
    }
    });
    
    buttonAlign.addEventListener('click', () => {
    const currentAlign = getComputedStyle(container).alignItems;
    if (currentAlign === 'stretch') {
        container.style.alignItems = 'center';
        buttonAlign.textContent = 'Wechsle zu center';
    }   else if (currentAlign === 'center') {
        container.style.alignItems = 'flex-start';
        buttonAlign.textContent = 'Wechsle zu flex-start';
    }
    else if (currentAlign === 'flex-start') {
        container.style.alignItems = 'flex-end';
        buttonAlign.textContent = 'Wechsle zu flex-end';
    } else if (currentAlign === 'flex-end') {
        container.style.alignItems = 'baseline';
        buttonAlign.textContent = 'Wechsle zu baseline';
    } else {
        container.style.alignItems = 'stretch';
        buttonAlign.textContent = 'Wechsle zu stretch';
    }
    });

    buttonGap.addEventListener('click', () => {
        const currentGap = getComputedStyle(container).gap;
        if (currentGap === '0px') {
            container.style.gap = '10px';
            buttonGap.textContent = 'Wechsle zu 10px';
        } else if (currentGap === '10px') {
            container.style.gap = '20px';
            buttonGap.textContent = 'Wechsle zu 20px';
        } else if (currentGap === '20px') {
            container.style.gap = '30px';
            buttonGap.textContent = 'Wechsle zu 30px';
        } else if (currentGap === '30px') {
            container.style.gap = '40px';
            buttonGap.textContent = 'Wechsle zu 40px';
        } else if (currentGap === '40px') {
            container.style.gap = '50px';
            buttonGap.textContent = 'Wechsle zu 50px';
        } else {
            container.style.gap = '0px';
            buttonGap.textContent = 'Wechsle zu 0px';
        }
    });
    


});