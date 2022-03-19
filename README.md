# Hext Next Cusdis

[Cusdis](https://github.com/djyde/cusdis) comment system for NexT. Cusdis is a lightweight, privacy-friendly alternative to Disqus.

## Install

```bash
npm install hexo-next-cusdis
```

## Register

1. Sign into [Cusdis](https://cusdis.com/api/auth/signin) (or your [self-hosted](https://cusdis.com/doc#/self-host/vercel) instance), and then click on the `+ New website` bottom to create a new website.

2. Click on the website you just created, and you will jump to a url that looks like "https://cusdis.com/dashboard/project/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx". The "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" part is your APP ID (`appId`).

## Configure

Set the value `enable` to `true`, add the obtained APP ID (`appId`), and edit other configurations in `cusdis` section in the config file as following. You can config those in both **hexo** or **theme** `_config.yml`:

```yml next/_config.yml
# Cusdis
# For more information: https://cusdis.com/, https://github.com/djyde/cusdis
cusdis:
  enable: false
  count: false # Show comment count
  appId: # your appid for this website
  host: # your cusdis host (Default: https://cusdis.com)
  lang: # Language, check https://github.com/djyde/cusdis/tree/master/widget/lang for available values
  locale: # Uncomment and modify the following items to override cusdis's i18n strings
    # powered_by: 'Comments powered by Cusdis'
    # post_comment: 'Comment'
    # loading: 'Loading'
    # email: 'Email (optional)'
    # nickname: 'Nickname'
    # reply_placeholder: 'Reply...'
    # reply_btn: 'Reply'
    # sending: 'sending...'
    # mod_badge: 'MOD'
    # content_is_required: 'Content is required'
    # nickname_is_required: 'Nickname is required'
    # comment_has_been_sent: 'Your comment has been sent. Please wait for approval.'
```
