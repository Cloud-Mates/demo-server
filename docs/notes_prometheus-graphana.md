
# Create namespace
kubectl create namespace monitoring

# Check 
kubectl get namespaces

# Install helm
sudo snap install helm --classic

# Install prometheus-community
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update

# Create user
echo -n 'adminuser' > ./admin-user

# Create password
echo -n 'p@ssword' > ./admin-password

# Check 
cat ./admin-user && cat ./admin-password

# Create secrets for grafana-admin-credentials
kubectl create secret generic grafana-admin-credentials --from-file=./admin-user --from-file=./admin-password -n  monitoring

# Check
kubectl get secret -n monitoring grafana-admin-credentials -o jsonpath="{.data.admin-user}" | base64 --decode ; echo
kubectl get secret -n monitoring grafana-admin-credentials -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

# Copy helm chart values from here and paste it in values.yaml
https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/values.yaml

# install helm chart from selected yaml
helm install -n monitoring prometheus prometheus-community/kube-prometheus-stack -f values.yaml


#  check monitoring pods
kubectl --namespace monitoring get pods -l "release=prometheus" -o wide
kubectl --namespace monitoring get pods -o wide

# Do port forwarding from the pod: prometheus-grafana...
kubectl port-forward -n monitoring prometheus-grafana-69fbbb8fc7-qckn8 52222:3000
kubectl port-forward -n monitoring prometheus-grafana-85f995576b-72qvb  --address 0.0.0.0 52222:3000





## Troubleshoot ---------------------------------------------------------------


# localhost:8080 refused ... 
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml


# reset userid/password

$ kubectl get pods --namespace monitoring

$ sudo kubectl exec --namespace monitoring -it prometheus-grafana-...... -- sh

__
|  */usr/share/grafana $*  grafana-cli admin reset-admin-password "yourNewPasswordHere"
| 
|  -------- OR ----------
| 
| */usr/share/grafana $*  find / -type f -name grafana.db
| output: /var/lib/kubelet/pods/............/volumes/kubernetes.io~empty-dir/storage/grafana.db
| 
| */usr/share/grafana $*  sudo sqlite3 /var/lib/kubelet/pods/............/volumes/kubernetes.io~empty-dir/storage/grafana.db
| 
| Finally,
| 
| */usr/share/grafana sqlite>*  update user set password = '59acf18b94d7eb0694c61e60ce44c110c7a683ac6a8f09580d626f90f4a242000746579358d77dd9e570e83fa24faa88a8a6', salt = 'F3FAxVm33R' where login = 'admin';
| */usr/share/grafana sqlite>*  .exit
|__

**This will set the username/password to admin/admin.**


# delete namespaces
kubectl delete namespace <namspace-name>