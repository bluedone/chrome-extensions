﻿chrome.storage.sync.get(null, function(items) {
    if (items['resolutions']) {
        document.getElementById('resolutions').value = items['resolutions'];
    } else {
        chrome.storage.sync.set({
            resolutions: 'fit-screen'
        }, function() {
            document.getElementById('resolutions').value = 'fit-screen'
        });
    }

    if (items['codecs']) {
        document.getElementById('codecs').value = items['codecs'];
    } else {
        chrome.storage.sync.set({
            codecs: 'default'
        }, function() {
            document.getElementById('codecs').value = 'default'
        });
    }

    if (items['room_password']) {
        document.getElementById('room_password').value = items['room_password'];
    }

    if (items['bandwidth']) {
        document.getElementById('bandwidth').value = items['bandwidth'];
    }

    if (items['room_id']) {
        document.getElementById('room_id').value = items['room_id'];
    }

    if (items['room_url_box']) {
        document.getElementById('room_url_box').checked = items['room_url_box'] === 'true';
    } else {
        chrome.storage.sync.set({
            room_url_box: 'true'
        }, function() {
            document.getElementById('room_url_box').checked = true;
        });
    }

    if (items['streaming_method']) {
        document.getElementById('streaming_method').value = items['streaming_method'];
    } else {
        chrome.storage.sync.set({
            streaming_method: 'RTCMultiConnection'
        }, function() {
            document.getElementById('streaming_method').value = 'RTCMultiConnection'
        });
    }
});

document.getElementById('streaming_method').onchange = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        streaming_method: this.value
    }, function() {
        document.getElementById('streaming_method').disabled = false;
    });
};

document.getElementById('resolutions').onchange = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        resolutions: this.value
    }, function() {
        document.getElementById('resolutions').disabled = false;
    });
};

document.getElementById('codecs').onchange = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        codecs: this.value
    }, function() {
        document.getElementById('codecs').disabled = false;
    });
};

document.getElementById('bandwidth').onblur = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        bandwidth: this.value
    }, function() {
        document.getElementById('bandwidth').disabled = false;
    });
};

document.getElementById('room_password').onblur = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        room_password: this.value
    }, function() {
        document.getElementById('room_password').disabled = false;
    });
};

document.getElementById('room_id').onblur = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        room_id: this.value
    }, function() {
        document.getElementById('room_id').disabled = false;
    });
};

document.getElementById('room_url_box').onchange = function() {
    this.disabled = true;

    chrome.storage.sync.set({
        room_url_box: this.checked === true ? 'true' : 'false'
    }, function() {
        document.getElementById('room_url_box').disabled = false;
    });
};
