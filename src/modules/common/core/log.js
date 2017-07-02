'use strict';
import path from "path";
import bunyan from "bunyan";
import config from "../../../config/config";
let env = config.env;

let log = bunyan.createLogger({
	name: "blog",
	streams: [{
		level: 'info',
		path: path.join(config.logDir, "/log.txt")
	}],
	serializers: {
		err: bunyan.stdSerializers.err,
		req: bunyan.stdSerializers.req,
		res: bunyan.stdSerializers.res
	}
});
log.level(config.logLevel);

if (env !== "development") {
	process.on('SIGUSR2', function() {
		log.reopenFileStreams();
	});
} else {
	// Todo nothing
}


export {
	log
}