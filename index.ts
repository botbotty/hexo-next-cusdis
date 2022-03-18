import path from "path";

type SupportedLanguage = "zh-cn" | "zh-tw" | "ja" | "es" | "tr" | "pt-br" | "oc" | "fr" | "id" | "ca" | "fi";

interface CusdisConfig {
	enable: boolean;
	count?: boolean;
	appId?: string;
	host?: string;
	lang?: SupportedLanguage;
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

function main() {
	const config: CusdisConfig = Object.assign(
		{ enable: false, },
		hexo.config.cusdis || {},
		hexo.theme.config.cusdis || {},
		hexo.config.theme_config.cusdis || {},
	);

	if (!config.enable) {
		return;
	}

	if (!config.appId) {
		hexo.log.warn("cusdis.appId can't be null or empty.");
		return;
	}

	config.host = config.host ? config.host : "https://cusdis.com";
	hexo.config.cusdis = config;

	if (config.count) {
		// Add count
		// TODO
	}

	// Add comment
	hexo.extend.filter.register("theme_inject", injects => {
		injects.comment.raw("cusdis", '<div class="comments" id="cusdis_thread"></div>', {}, { cache: true });
		injects.bodyEnd.file("cusdis", path.join(__dirname, "cusdis.njk"));
	});

	// Add post_mta
	// TODO
}

main();
