import Util from "@next-theme/utils";

interface CusdisConfig {
	enable: boolean;
	count?: boolean;
	appId?: string;
	host?: string;
	lang?: string;
	locale?: {
		powered_by?: string;
		post_comment?: string;
		loading?: string;
		email?: string;
		nickname?: string;
		reply_placeholder?: string;
		reply_btn?: string;
		sending?: string;
		mod_badge?: string;
		content_is_required?: string;
		nickname_is_required?: string;
		comment_has_been_sent?: string;
	}
}

const util = new Util(hexo, __dirname);

// Add comment
hexo.extend.filter.register("theme_inject", injects => {
	const config: CusdisConfig = util.defaultConfigFile("cusdis", "default.yml");

	if (!config.enable) return;

	if (!config.appId) {
		hexo.log.warn("Cusdis is enabled but appId is not set.");
		return;
	}

	injects.comment.raw("cusdis", '<div class="comments" id="cusdis_thread"></div>', {}, { cache: true });
	injects.bodyEnd.file("cusdis", util.getFilePath("cusdis.njk"));
});

// Add post_mta
// TODO
