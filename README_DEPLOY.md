Deployment guide — host on your own server and point a domain

This project is a static SPA (built into `dist/`). Below are two simple paths to get an own URL (domain) pointing to the app.

Option A — VPS + Docker (recommended)

1. Build production locally:

```bash
cd /home/amrit/projects/looklab-ai
npm install
npm run build
```

2. Build Docker image on the VPS (copy project or use `scp`/rsync):

```bash
# on the VPS in the project root
docker build -t looklab-ai:latest .
```

3. Run the container:

```bash
docker run -d --name looklab -p 80:80 looklab-ai:latest
```

4. Point your domain A record to the VPS public IP.

5. (Optional) Add HTTPS with Certbot + a small nginx reverse proxy on the host, or run the container behind a managed reverse-proxy.

Option B — Managed static host (Netlify, Vercel, Render)

- You can drag-and-drop the `dist/` folder to Netlify's site deploys, or use the provider CLI. These providers give you a URL and let you add a custom domain.
- Note: you do not need GitHub if you upload directly from your machine or link a different Git provider.

Notes on domain and HTTPS

- To get a real URL like `https://yourdomain.com` you must register a domain with any registrar (Namecheap, GoDaddy, Google Domains, etc.) and set its DNS A record to your VPS IP or follow instructions of the hosting provider.
- For HTTPS on a VPS, run Certbot on the host (nginx plugin) or use a proxy that automates Let's Encrypt.

Quick nginx example (host-level) to obtain certs using certbot

1. Install nginx on the host and place this server block (replace `yourdomain.com`):

```nginx
server {
  listen 80;
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://127.0.0.1:80;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

2. Obtain certs:

```bash
sudo apt update && sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

After certbot succeeds, nginx will be configured for HTTPS.

If you'd like, I can:
- Create a small `docker-compose.yml` that runs the site and an nginx proxy with Let's Encrypt companion.
- Generate the exact `nginx` server block for your domain (you provide the domain and VPS IP).
- Walk through registering a domain and updating DNS.

Docker Compose (automated HTTPS) — quick start

1. Copy the example `.env.example` to `.env` and set your domain and email:

```bash
cp .env.example .env
# edit .env and set VIRTUAL_HOST and LETSENCRYPT_EMAIL
```

2. Build the image and bring up the stack on your VPS:

```bash
docker compose build
docker compose up -d
```

3. Make sure your DNS A record points your domain to the VPS public IP before running the stack — the letsencrypt companion needs the domain to resolve to issue certificates.

Notes:
- The compose file uses `jwilder/nginx-proxy` and `jrcs/letsencrypt-nginx-proxy-companion` to automatically provision TLS for containers that set `VIRTUAL_HOST` and `LETSENCRYPT_*` environment variables.
- If your provider blocks ports 80/443, certificate issuance will fail.

