document.addEventListener('DOMContentLoaded', function() {
    var loopBegan = 0;
    var loopCompleted = 0;
    var beginLogEl = document.getElementById('beginLog');
    var completeLogEl = document.getElementById('completeLog');
    var animation;

    var element = document.querySelector('.loopBegin-loopComplete-demo .smiley');

    element.addEventListener('mouseover', function() {
        if (!animation) {
            animation = anime({
                targets: element,
                translateX: {
                    value: 2400,
                    duration: 8000
                },
                loop: true,
                direction: 'alternate',
                easing: 'steps(50)',
                loopBegin: function(anim) {
                    loopBegan++;
                    // Не используется в этом примере, но можно отобразить где-то
                    // beginLogEl.value = 'loop began: ' + loopBegan;
                },
                loopComplete: function(anim) {
                    loopCompleted++;
                    // Не используется в этом примере, но можно отобразить где-то
                    // completeLogEl.value = 'loop completed: ' + loopCompleted;
                }
            });
        }
    });

    
});
