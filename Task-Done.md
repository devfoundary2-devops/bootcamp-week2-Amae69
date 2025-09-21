### **what i did**
---

- On the already Created k8s/ directory structure and files.

- I build my local Docker images and load them into Minikube.

- I Apply the manifests file: namespace → configmaps → deployments → services → ingress.

- I Port-forward Grafana, Frontend,  Backend, Prometheus.

- Then I run the assessment tests (health endpoints, metrics, Grafana dashboards, logs, traces).

```
kubectl port-forward -n shopmicro svc/grafana 3000:3000 &

kubectl port-forward -n shopmicro svc/frontend 8080:3000 &

kubectl port-forward -n shopmicro svc/backend 3001:3001 &

kubectl port-forward -n shopmicro svc/prometheus 9090:9090 &
```

### **Verify my deployment**
---
- `kubectl get pods -n shopmicro`

- `kubectl get svc -n shopmicro`

- `kubectl get deploy -n shopmicro`

![All pod running](./images/all%20pod%20running.png)


### **Open Grafana:**

- Grafana: http://localhost:3000
 (login: admin / admin)

**Grafana dashboard**

![grafana dashboard](./images/grafana%20dashboard.png)

**Metrics on grafana**

![metrics on grafana](./images/metrics%20on%20grafana.png)

**logs on grafana**

![logs on grafana](./images/logs%20on%20grafana.png)

### **Open Prometheus UI:**

 `http://localhost:9090`

**Prometheus UI**

![Prometheus UI](./images/prometheus%20UI.png)

### **Open Frontend:**

 `http://localhost:8080`

 ![Frontend](./images/front%20end%20application.png)

 ### **Test Service Connectivity:**

 - **Test backend health:**
 
  `curl http://localhost:3001/health`

  ![backend health](./images/test%20backend%20health.png)

- **Test frontend health:**

`curl http://localhost:8080`

![frontend health](./images/test%20frontend%20health.png)

