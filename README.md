# My Cloud Panel

یک سیستم مدیریت متمرکز زیرساخت و شبکه ابری برای پایش نودها، مدیریت دسترسی‌ها و توزیع ترافیک.

## Features

- **Multi-Node Architecture:** مدیریت نودها و اِندپوینت‌های متصل به سرور
- **Real-Time Telemetry:** پایش وضعیت سرورها، میزان مصرف ترافیک و پاسخ‌دهی شبکه
- **Automated Routing:** مدیریت هوشمند دامنه، SSL خودکار و توزیع بار
- **User Management:** سیستم تعریف کاربر، محدودیت حجم و زمان استفاده
- **Dark-First Dashboard:** رابط کاربری مدرن، سبُک و بدون نیاز به Build Step

## Architecture

```text
├── core/                      # Core control plane
│   ├── lunel_core/            # FastAPI app
│   │   ├── routers/           # instances, domains, admin, internal
│   │   ├── services/          # deployments, gateway, workers, domains
│   │   └── db.py              # migrations + pool
│   └── frontend/              # dark-first SPA (vanilla ES modules)
├── worker/lunel_worker/       # node agent (drivers, heartbeat, edge-proxy)
├── deploy/
│   ├── docker/                # Dockerfiles + docker-compose stack
│   ├── proxy/                 # optional Caddy edge (wildcard TLS)
│   └── scripts/dev.sh         # dev launcher
├── docs/                      # ARCHITECTURE, API, SECURITY, DEPLOYMENT
└── tests/                     # protocol + pipeline tests
