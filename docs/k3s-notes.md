
# create first control plane with etcd
curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s - server --cluster-init

# get k3s token
sudo cat /var/lib/rancher/k3s/server/node-token

# create next control plane
curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET_TOKEN sh -s - server --server https://<ip or hostname of server1>:6443

# create k3s agent node
curl -sfL https://get.k3s.io | K3S_URL=https://192.168.0.128:6443 K3S_TOKEN=$SECRET_TOKEN K3S_NODE_NAME=$NODE_NAME sh -s - agent

# run rancher container
sudo docker run --privileged -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher:latest

# k3s config file
cat /etc/rancher/k3s/config

# get .sh files for k3s
ls /usr/local/bin/

# uninstall k3s
/usr/local/bin/k3s-uninstall.sh

## Troubleshoot

# localhost:8080 refused ... 
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml

kubectl proxy --port=8080 --address 0.0.0.0
