#  DevOps Monitoring Project

A complete containerized monitoring and logging stack built using Docker Compose. This project demonstrates how to monitor applications and infrastructure using Prometheus, Grafana, cAdvisor, Loki, and Promtail.

---

#  Project Overview

This project monitors a Dockerized application by collecting:

-  Metrics using Prometheus
-  Dashboards using Grafana
-  Container metrics using cAdvisor
-  Centralized logs using Loki
-  Log collection using Promtail

---

# Architecture

```
                 +----------------------+
                 |  Monitoring App      |
                 +----------+-----------+
                            |
                Metrics & Logs
                            |
        +-------------------+-------------------+
        |                                       |
+-------v--------+                    +---------v---------+
|   Prometheus   |                    |    Promtail       |
+-------+--------+                    +---------+---------+
        |                                       |
        |                            Docker Container Logs
        |                                       |
+-------v--------+                    +---------v---------+
|    Grafana     | <----------------> |       Loki        |
+----------------+                    +-------------------+

                ^
                |
         +------+------+
         |  cAdvisor   |
         +-------------+
```

---

# Tech Stack

- Docker
- Docker Compose
- Prometheus
- Grafana
- Loki
- Promtail
- cAdvisor

---

#  Project Structure

```
devops-monitoring-project/
│
├── app/
├── prometheus/
│   └── prometheus.yml
├── promtail/
│   └── promtail-config.yml
├── screenshots/
├── docs/
├── docker-compose.yml
└── README.md
```

---

#  Services

| Service | Port | Purpose |
|---------|------|---------|
| Monitoring App | 5000 | Sample application |
| Prometheus | 9090 | Metrics collection |
| Grafana | 3000 | Visualization |
| cAdvisor | 8081 | Docker container metrics |
| Loki | 3100 | Log aggregation |
| Promtail | 9080 | Log collection |

---

#  Features

- Dockerized monitoring stack
- Application metrics monitoring
- Container monitoring
- Custom Grafana dashboards
- Centralized log aggregation
- Alerting using Grafana
- Docker Compose deployment

---

#  Dashboards

### Metrics Dashboard

- CPU Usage
- Memory Usage
- Request Count
- Response Time
- Application Uptime
- Container Metrics

### Logs Dashboard

- Live Docker Logs
- Error Logs
- Warning Logs
- HTTP Request Logs
- Log Rate

---

#  Alerting

Configured alerts include:

- High CPU Usage
- High Memory Usage
- Application Down
- Prometheus Target Down

---

#  Logging

Logging pipeline:

Docker Containers

⬇

Promtail

⬇

Loki

⬇

Grafana Explore

---

# ▶ Run the Project

Clone the repository:

```bash
git clone https://github.com/Sriram-0549/Devops-monitoring-project.git
```

Go into the project:

```bash
cd Devops-monitoring-project
```

Start services:

```bash
docker compose up -d
```

Check running containers:

```bash
docker ps
```

---

#  Access

Grafana

```
http://localhost:3000
```

Prometheus

```
http://localhost:9090
```

cAdvisor

```
http://localhost:8081
```

Monitoring App

```
http://localhost:5000
```

---

#  Screenshots

## Metrics Dashboard

(Add Screenshot)

---

## Logs Dashboard

(Add Screenshot)

---

## Prometheus Targets

(Add Screenshot)

---

## Alert Rules

(Add Screenshot)

---

## Docker Containers

(Add Screenshot)

---

#  Skills Demonstrated

- Docker
- Docker Compose
- Monitoring
- Logging
- Prometheus
- Grafana
- Loki
- Promtail
- cAdvisor
- Alerting
- Git & GitHub

---

#  Learning Outcomes

- Built a complete monitoring stack
- Collected application and container metrics
- Created production-style Grafana dashboards
- Implemented centralized logging
- Configured monitoring alerts
- Managed the entire project using Docker Compose

---

# 💻 Author

**Sriram**

GitHub:
https://github.com/Sriram-0549
