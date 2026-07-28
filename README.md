 DevOps Monitoring Project

 Project Overview

This project demonstrates a complete containerized monitoring solution using Prometheus, Grafana, Node Exporter, cAdvisor, and a sample Docker application.

The goal of this project is to monitor:

- Docker containers
- Linux host system metrics
- Application availability
- Resource usage (CPU, Memory, Disk, Network)
- Alerts for service failures

Everything is orchestrated using Docker Compose, making deployment simple and reproducible.

---

 Architecture

                +---------------------+
                |  Monitoring App     |
                +----------+----------+
                           |
                           |
                +----------v----------+
                |      cAdvisor       |
                +----------+----------+
                           |
                           |
Linux Host ----> Node Exporter
                           |
                           |
                +----------v----------+
                |     Prometheus      |
                +----------+----------+
                           |
                           |
                +----------v----------+
                |      Grafana        |
                +---------------------+

---

 Tech Stack

- Docker
- Docker Compose
- Prometheus
- Grafana
- Node Exporter
- cAdvisor
- YAML

---

 Project Structure

devops-monitoring-project/
│
├── docker-compose.yml
├── README.md
│
├── app/
│
├── prometheus/
│   ├── prometheus.yml
│   └── alert.rules.yml
│
├── grafana/
│
├── docs/
│
└── screenshots/

---

 Services Used

Prometheus

- Metrics collection
- Stores time-series data
- Scrapes metrics from exporters

Port:

9090

---

Grafana

- Dashboard visualization
- Alert management
- Prometheus datasource

Port:

3000

---

Node Exporter

Monitors Linux host metrics

Includes:

- CPU Usage
- Memory Usage
- Disk Usage
- Filesystem
- Network
- Load Average

Port:

9100

---

cAdvisor

Monitors Docker containers

Includes:

- Container CPU
- Container Memory
- Network I/O
- Filesystem usage

Port:

8081

---

Sample Monitoring App

A Dockerized application used to demonstrate monitoring and alerting.

---

 Grafana Dashboards

Implemented panels include:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic
- Application Uptime
- Container Metrics

---

 Alerts Configured

Prometheus alert rules include:

- Prometheus Down
- Application Down
- Node Exporter Down
- cAdvisor Down

Grafana notification system is connected to Prometheus alert rules.

---

 Screenshots

Include screenshots of:

- Grafana Dashboard
- Prometheus Targets
- Alert Rules
- Docker Containers
- Docker Compose Running

---

 Getting Started

Clone repository

git clone https://github.com/Sriram-0549/Devops-monitoring-project.git

Move into project

cd Devops-monitoring-project

Start services

docker compose up -d

Access

Prometheus

http://localhost:9090

Grafana

http://localhost:3000

cAdvisor

http://localhost:8081

Node Exporter

http://localhost:9100/metrics

---

 Skills Demonstrated

- Docker Compose
- Container Monitoring
- Linux Monitoring
- Grafana Dashboards
- Prometheus Configuration
- Alert Rules
- YAML Configuration
- DevOps Monitoring Best Practices

---

 Future Improvements

- Kubernetes Monitoring
- Alertmanager Integration
- Email Notifications
- Slack Notifications
- Loki Log Monitoring
- Prometheus Service Discovery
- Production Deployment
- Terraform Infrastructure
- CI/CD Pipeline Integration

---

 Author

Sriram

BCA Graduate | DevOps & Cloud Enthusiast

GitHub:
https://github.com/Sriram-0549
