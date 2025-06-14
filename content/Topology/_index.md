+++
title = "Topology"
linkTitle = 'Topology'
type = "home"
weight = 2
+++
---

This section will familiarize you with the network topology that we are going to be using throughout this workshop.

While we go through the topology, please, access the [LAB link]() and start LAB.1 that will take about 5 minutes to load and set things up for us.

![Topology](topo.svg)

---
### DC Devices

| Hostname | Mgmt IP  | Lo0 RID | Lo1 VTEP | ASN | P2P Subnet | Credentials |
| ---      | ---      | ---     | ---      | --- | ---        | --- |
| spine1   | 172.20.20.101 | 10.1.250.1 | NA | 65500 | 10.1.1/24 | admin/admin |
| spine2   | 172.20.20.102 | 10.1.250.2 | NA | 65500 | 10.1.2/24 | ---//--- |
| leaf1    | 172.20.20.11  | 10.1.250.11 | 10.1.251.11 | 65501 | NA | ---//--- |
| leaf2    | 172.20.20.12  | 10.1.250.12 | 10.1.251.12 | 65502 | NA | ---//--- |
| bleaf    | 172.20.20.13  | 10.1.250.13 | 10.1.251.13 | 65503 | NA | ---//--- |
| wan      | 172.20.20.50  | 10.11.250.1 | NA          | 64512 | 10.11/16 | ---//--- |

---
### DC Hosts

| Hostname  | Mgmt IP  | VLAN | Eth0 IP | Credentials |
| ---       | ---      | ---  | ---     | --- |
| fe_host1  | 172.20.20.15 | 110 | 172.16.110.11 | user/multit00l |
| be_host1  | 172.20.20.16 | 111 | 172.16.111.11 | --//-- |
| fe_host2  | 172.20.20.17 | 110 | 172.16.110.12 | --//-- |
| be_host2  | 172.20.20.18 | 111 | 172.16.111.12 | --//-- |
| syn_leaf1 | 172.20.20.21 | 113 | 172.16.112.11 | admin/admin |
| syn_leaf2 | 172.20.20.22 | 113 | 172.16.112.12 | --//-- |
| syn_leaf3 | 172.20.20.23 | 113 | 172.16.112.13 | --//-- |



---
### Externals

| Hostname  | Mgmt IP  | Role | Eth0 IP | Credentials |
| ---       | ---      | ---  | ---     | ---         |
| custa_host1  | 172.20.20.151 | Customer | 192.168.120.11 | user/multit00l |
| asn600_host1 | 172.20.20.161 | Transit  | 192.168.160.11 | ---//--- |
| asn700_host1 | 172.20.20.171 | NA   | 192.168.170.11 | ---//--- |
| asn800_host1 | 172.20.20.181 | PNI  | 192.168.180.11 | ---//--- |


---
### Applications


| Port(s)         | From     | To        |
| --------------- | -------- | --------- |
| https/443       | Internal | External  |
| https/443       | External | Internal  |
| https/443       | External | External  |
| tcp/5800-5803   | External | Frontend  |
| tcp/7910        | CustA    | External  |
| postgresql/5432 | Frontend | Backend   |
| tcp/7910        | Frontend | Frontend  |
| tcp/8213        | Backend  | Backend   |
| tcp/4443        | Backend  | Externals |


