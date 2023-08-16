minikube creates node on virtual machine. To start minikube we need a hypervisor for the virtual machines. If our computer contains multiple hypervisor eg. virtualbox, hyperkit. We can start minikube commanding a specific hypervisor by:
minikube start --vm-driver="hypervisor_name"

minikube start
minikube stop
minikube delete
minikube status
minikube ip
minikube service list
minikube profile list
minikube logs
minikube dashboard
minikube addons enable metrics-server
minikube service <service_name> --url


kubectl top nodes
kubectl apply -f <filename>
kubectl get all -o wide
kubectl get nodes -o wide
kubectl logs <pod_name>
kubectl delete deployment <deployment_name>
kubectl port-forward service/<service_name> 30001:3000
kubectl api-resources
kubectl cluster-info*
kubectl config view
kubectl describe node 


kubectl label node minikube-m03 node-role.kubernetes.io/worker=worker 
kubectl label nodes minikube-m02 role=worker 