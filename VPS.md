# VPS Server Reference

## Server Info
- **IP:** `82.198.225.157`
- **OS:** Debian 13
- **Hostname:** `srv1299776`
- **User:** `root`

## Installed Software
| Software | Version |
|----------|---------|
| Node.js  | v20.20.0 |
| npm      | 10.8.2 |
| PM2      | latest |
| Nginx    | 1.26.3 |
| Certbot  | installed (auto-renews SSL) |

## Directory Structure
```
/var/www/
├── chistopodtepeto/     # chisto app
├── your-finance-flow/   # finance landing + dashboard
├── portfolio/           # avramov.dev (Next.js)
└── html/                # default nginx dir
```

## Running Apps (PM2)
| ID | Name            | Port | Domain                        |
|----|-----------------|------|-------------------------------|
| 0  | chisto          | 3000 | chistopodtepeto.com           |
| 1  | finance-landing | 3001 | yourfinanceflow.app           |
| 2  | finance-app     | 3002 | app.yourfinanceflow.app       |
| 3  | portfolio       | 3003 | avramov.dev                   |

## Nginx Configs
```
/etc/nginx/sites-available/
├── default        # fallback server
├── your-finance   # yourfinanceflow.app + app.yourfinanceflow.app
├── chisto         # chistopodtepeto.com
└── avramov.dev    # avramov.dev portfolio

/etc/nginx/sites-enabled/  # symlinks to above (must exist for config to be active)
```

## SSL Certificates (Certbot)
| Domain | Cert Name | Expires |
|--------|-----------|---------|
| avramov.dev, www.avramov.dev | avramov.dev | 2026-06-19 |
| chistopodtepeto.com | chistopodtepeto.com | 2026-04-26 |
| yourfinanceflow.app, app.yourfinanceflow.app | yourfinanceflow.app-0001 | 2026-05-16 |

Certs are stored at `/etc/letsencrypt/live/<cert-name>/`

## DNS (avramov.dev)
| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | 82.198.225.157     |
| CNAME | www  | avramov.dev        |

## Environment Variables
- Portfolio env file: `/var/www/portfolio/.env.local`
  - `RESEND_API_KEY` — for contact form (Resend)

## Common Commands

### PM2
```bash
pm2 list                          # list all apps
pm2 logs <name> --lines 50        # view logs
pm2 restart <name>                # restart app
pm2 save                          # save current process list
```

### Deploy / Update Portfolio
```bash
cd /var/www/portfolio
git pull
npm install
npm run build
pm2 restart portfolio
```

### Nginx
```bash
nginx -t                          # test config
systemctl reload nginx            # reload after config changes

# Add new site:
nano /etc/nginx/sites-available/<domain>
ln -s /etc/nginx/sites-available/<domain> /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### SSL
```bash
certbot certificates              # list all certs
certbot --nginx -d domain.com     # issue new cert
```

### Check port usage
```bash
ss -tlnp | grep <port>
```

### Get server IPv4
```bash
curl -4 ifconfig.me
```
