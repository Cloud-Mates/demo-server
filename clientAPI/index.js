const k8s = require('@kubernetes/client-node');
const fs = require('fs');

// const kc = new k8s.KubeConfig();
// kc.loadFromDefault();


// ---------------------------------------------------------------------------------


const kc = new k8s.KubeConfig();
kc.loadFromFile(__dirname+"/config.yaml")


// ---------------------------------------------------------------------------------

// const kc = new k8s.KubeConfig();
// kc.loadFromString(JSON.stringify(
//     {
//         "apiVersion": "v1",
//         "clusters": [
//             {
//                 "cluster": {
//                     "certificate-authority-data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUzTURFMk56RTVOell3SGhjTk1qTXhNakEwTURZek9UTTJXaGNOTXpNeE1qQXhNRFl6T1RNMgpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUzTURFMk56RTVOell3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFUMmsxZzZBVkV1RTJ4WGZ1bk1ZdzhOZSsyMmdxM3NkRVRndVJUTk1VOGYKeEo5Ri94eGtNOEZXQ2VHNXptZTRLd2k4NWh6ZndFR25NUW9QQ1RKTnczeVFvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVXUraldrM21Rd3B4WGJjNjV0K2tECm1oZzdna0F3Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQUxqM1JRc0tOMW12L3EvOWd3amlLQUdxTGFsd1VEQ0oKOWhuM2F4Nk5ZUFhPQWlFQXQ0K2tSK2s0SFJpTmMvWkxFRG5naG5ubW8vMlVvbG91aGxxSTJ5UGFZRXM9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
//                     "server": "https://192.168.0.112:6443"
//                 },
//                 "name": "default"
//             }
//         ],
//         "contexts": [
//             {
//                 "context": {
//                     "cluster": "default",
//                     "user": "default"
//                 },
//                 "name": "default"
//             }
//         ],
//         "current-context": "default",
//         "kind": "Config",
//         "preferences": {},
//         "users": [
//             {
//                 "name": "default",
//                 "user": {
//                     "client-certificate-data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJWUJaNHdobWZuNmt3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOekF4TmpjeE9UYzJNQjRYRFRJek1USXdOREEyTXprek5sb1hEVEkwTVRJdwpNekEyTXprek5sb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJQc09mZHJYb29yQXA5ZEcKYmZsZkorVzluejlneXNubmxMbHA0NlVjWWZ4ajBXblNPRERPa3Z6VU5aeWViZ1RYZTFwMDcrZmdJKzQ0OVkyVwpYc0xKZkQralNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVDVyUVZ5ZU54U1l3R0hUYmVDQzNEeisxdFY5VEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCaXZNNHU4b0RuNmFlSzhEOWFJRGxpZUI3ODhQYXJaMjg1ZEpwazlITk9GQUlnU00zaFZDOXRkV0hiUUpXUQp1YkRWRXBIcWpsNjhOSEFrT1ZOQ3orUVI4ZVE9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUzTURFMk56RTVOell3SGhjTk1qTXhNakEwTURZek9UTTJXaGNOTXpNeE1qQXhNRFl6T1RNMgpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUzTURFMk56RTVOell3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRTlRCcUlhRnFlQmRPZSsyaDM3azk4NitpdkJkNUtnamhkUTdsWm9Zb2QKaVBqYmJVZE1uTjYzQkEvWDh1ZkhLV1owS3dXUGFUcHpoL1FXbThqRVAxNjVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVSthMEZjbmpjVW1NQmgwMjNnZ3R3CjgvdGJWZlV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUlJbVhUK1RVbzVvL0NySlBFcWp0STI3RTFQS1daY28KUVdGOEtFV3BPektFQWlCaG40SDhmUTFrc01kemEvQ2VRR2hLWWxaMTBMSktuWjVkWkIrTlZBMjdJZz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
//                     "client-key-data": "LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU9yWCtjV24rN1RVT2NaYkRXeEhlVnpRTEdrb21LK3gydnBwa3pBTVhCL2hvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFK3c1OTJ0ZWlpc0NuMTBadCtWOG41YjJmUDJES3llZVV1V25qcFJ4aC9HUFJhZEk0TU02UwovTlExbko1dUJOZDdXblR2NStBajdqajFqWlpld3NsOFB3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
//                 }
//             }
//         ]
//     }
// ));

// ---------------------------------------------------------------------------------

// const cluster = {
//     name: 'default',
//     server: 'http://192.168.0.113:8080',
// };

// const user = {
//     name: 'default',
//     password: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrakNDQVRlZ0F3SUJBZ0lJRSs2TmRFeDJnS3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOekF4TmpFME1URTJNQjRYRFRJek1USXdNekUwTXpVeE5sb1hEVEkwTVRJdwpNakUwTXpVeE5sb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJCYW1wekxRdnZ0OG5rZi8KY2FuTEJKcnczYzNRUStneFU3bC9XNjJtZ2VIMXBEcWpYLzZiQUJ1RWRrRVBuWm0zMlVhY0F3UEZuNDBaR3RrZQo2WE5jRk5palNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUlpJeWhGcmdmRWpGd3UyMEZrSmhYZ0RBTEdUVEFLQmdncWhrak9QUVFEQWdOSkFEQkcKQWlFQWl0akVOM2IzeGpSS0gvbk9FaXJlQUU1MzVmM0t1ZDc1NmR6bEpHM3kvQndDSVFDN2NubWhweitWVmxrcApXUnJKTnJsckpETVcvR2RFeE5na2hidVRKeFF4R3c9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlCZGpDQ0FSMmdBd0lCQWdJQkFEQUtCZ2dxaGtqT1BRUURBakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwClpXNTBMV05oUURFM01ERTJNVFF4TVRZd0hoY05Nak14TWpBek1UUXpOVEUyV2hjTk16TXhNVE13TVRRek5URTIKV2pBak1TRXdId1lEVlFRRERCaHJNM010WTJ4cFpXNTBMV05oUURFM01ERTJNVFF4TVRZd1dUQVRCZ2NxaGtqTwpQUUlCQmdncWhrak9QUU1CQndOQ0FBUUZYK3JnLzhvNmFqMHpDakRnVU12cWN5Wm1PNkhlSEZxRTExVUdkMm5hCkR6SzM3ajBLNU1FazdiSHBoWlhZQnpmenFCdDZiQnpuZTZYSGR3N25UNE9LbzBJd1FEQU9CZ05WSFE4QkFmOEUKQkFNQ0FxUXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QWRCZ05WSFE0RUZnUVVXU01vUmE0SHhJeGNMdHRCWkNZVgo0QXdDeGswd0NnWUlLb1pJemowRUF3SURSd0F3UkFJZ0hsSGhremU5SHR3YWo3S1dtVndyVUljbE12QkNVeDM2Ck1YdlZyZEpZL2s0Q0lEM1kxWUhqMjlML0I4V2ZFcEJtQWdLVk5BbFB4enJUaHJoM0ZRaXBtOURMCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K',
// };

// const context = {
//     name: 'default',
//     user: user.name,
//     cluster: cluster.name,
// };

// const kc = new k8s.KubeConfig();
// kc.loadFromOptions({
//     clusters: [cluster],
//     users: [user],
//     contexts: [context],
//     currentContext: context.name,
// });

// ---------------------------------------------------------------------------------

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

console.log("basePath:  ", k8sApi.basePath);
console.log("response:  ", k8sApi);

k8sApi.listNamespacedPod('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/pods.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listNode('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/nodes.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listNamespace('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/namespace.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listNamespacedSecret('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/secret.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listResourceQuotaForAllNamespaces('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/resourcesQuota.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listPersistentVolume('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/persistentVolume.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listNamespacedService('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/services.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });

k8sApi.listNamespacedConfigMap('default')
    .then((res) => {
        fs.writeFileSync(`${__dirname}/response/configMap.json`, JSON.stringify({ data: res.body }, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });
