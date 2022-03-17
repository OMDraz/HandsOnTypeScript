var Speaker = /** @class */ (function () {
    function Speaker(name) {
        this.name = name;
    }
    Object.defineProperty(Speaker.prototype, "Message", {
        get: function () {
            if (!this.message.includes(this.name)) {
                throw Error("message is missing speaker's name");
            }
            return this.message;
        },
        set: function () {
            var tmpMessage = val;
            if (!val.includes(this.name)) {
                tmpMessage = this.name + " " + val;
            }
            this.message = tmpMessage;
        },
        enumerable: false,
        configurable: true
    });
    return Speaker;
}());
var speaker = new Speaker("john");
speaker.Message = "hello";
console.log(speaker.Message);
