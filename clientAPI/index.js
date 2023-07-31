const k8s = require('@kubernetes/client-node');
const fs = require('fs');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

console.log("basePath:  ", k8sApi.basePath);
console.log("defaultHeaders:  ", k8sApi.defaultHeaders);
console.log("useQuerystring:  ", k8sApi.useQuerystring);

k8sApi.listNamespacedPod('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/pods.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listNode('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/nodes.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listNamespace('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/namespace.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listNamespacedSecret('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/secret.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listResourceQuotaForAllNamespaces('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/resourcesQuota.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listPersistentVolume('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/persistentVolume.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listNamespacedService('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/services.json`, JSON.stringify({data: res.body}, null, 4));
});

k8sApi.listNamespacedConfigMap('default').then((res) => {
    fs.writeFileSync(`${__dirname}/response/configMap.json`, JSON.stringify({data: res.body}, null, 4));
});
