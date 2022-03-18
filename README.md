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
  count: true
  appId: # your appid for this website
  host: # your cusdis host (Default: https://cusdis.com)
  lang: # Language, available values: zh-cn | zh-tw | ja | es | tr | pt-BR | oc | fr | id | ca | fi
```
