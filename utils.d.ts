import Hexo from "hexo";

class Util {
	constructor(hexo: Hexo, pluginDir: string);
	getFilePath(file: string): string;
	getFileContent(file: string): string;
	defaultConfigFile(key: string, file: string): any;
}

export default Util;
