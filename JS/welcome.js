var words = [
    "welcome", "hi!", "hiiii", "haiii", "yo", "hello!", "good morning!", "good afternoon", "uhhh... HII", "helloooo"
];
var part, i = 0, offset = 0, len = words.length, forwards = true, skip_count = 0, skip_delay = 15, speed = 70;

var wordflick = function() {
    setInterval(function() {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                i++;
                if (i >= len) {
                    i = 0; 
                }
            }
        }

        part = words[i].substr(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.welcome-text').text(part);
    }, speed);
};

document.addEventListener('DOMContentLoaded', () => {
    wordflick();
});