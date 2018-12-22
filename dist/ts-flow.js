"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var child = child_process_1.spawn('python', ['-V']);
child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    //Here is where the output goes
});
child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
    //Here is where the error output goes
});
child.on('close', function (code) {
    console.log('closing code: ' + code);
    //Here you can get the exit code of the script
});
//# sourceMappingURL=ts-flow.js.map