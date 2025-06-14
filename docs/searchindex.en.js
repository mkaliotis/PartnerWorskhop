var relearn_searchindex = [
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.1 - Onboarding",
    "content": "Step.1 - Deploy the Universal Agent Register agent Add additional caps (Syslog) Step.2 - Device Discovery Discover devices Configure Cred profile for snmp Configure Monitoring Template for 30sec poll Step.3 - Enable ST collection Configure Cred Profile for ST Enable ST Step.4 - Title Step.5 - Title",
    "description": "Deploy Universal Agent and Onboard Devices into Kentik NMS",
    "tags": [],
    "title": "Task 1.1 - Device Discovery",
    "uri": "/PartnerWorskhop/lab-01/task_1/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.2 - Alerting",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 2.1 - NMS Alerting",
    "uri": "/PartnerWorskhop/lab-02/task_1/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.3 - Synthetics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 3.1 - Deploy Agents",
    "uri": "/PartnerWorskhop/lab-03/task_1/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.4 - Custom Metrics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 4.1 - Title",
    "uri": "/PartnerWorskhop/lab-04/task_1/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "Prior to this workshop, you should have received an email with instructions on how to set up a free trial Kentik account. This is a prerequisite step in order to be able to run the Labs during the workshop.\nIf you already have registered for an account you can follow the tasks for validation.\nTask 0.1 - Register for a Free Trial Account Navigate to kentik.com/get-started and fill in your details in the form to create your free trial Kentik account.\nWarning Use your personal email and stick to the US portal. For the company field, you could specify something like partnerwks_\u003cnickname\u003e.\nOnce you submit the form, check your inbox for an account activation email and follow the link in order to set your password and activate your account.\nClick the Return to Kentik link or navigate to portal.kentik.com and log in using your credentials.\nTask 0.2 - Access the portal and check out the platform Once logged in for the first time, you can click the Next: Start Monitoring button to get access to the portal.\nClick on the hamburger icon on the top right corner to expose the Menu.\nHere you can access the different products and workflows available in the platform.\nClick on the Building icon on the top right corner to expose your Organization Settings and note your Account ID number assigned.\nClick the Licenses link to get to your licensing page.\nTip If you are redirected to the Onboarding Wizard page, just do a logout/login and visit your license page once more\nHere you can see the Free Licenses and their limits you can use in the respective products in the platform.\nThanks for Activating your trial account",
    "description": "Prior to this workshop, you should have received an email with instructions on how to set up a free trial Kentik account. This is a prerequisite step in order to be able to run the Labs during the workshop.\nIf you already have registered for an account you can follow the tasks for validation.\nTask 0.1 - Register for a Free Trial Account Navigate to kentik.com/get-started and fill in your details in the form to create your free trial Kentik account.",
    "tags": [],
    "title": "Pre-Workshop Tasks",
    "uri": "/PartnerWorskhop/pre-lab/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.1 - Onboarding",
    "content": "Step.1 - Network Classification Step.2 - Interface Classification Step.3 - Device Labels Assign device Labels (Bulk) Step.4 - Configure a Site Topology Assign Device Roles (Bulk) Step.5 - Custom Applications Step.6 - AS Groups Step.5 - Title",
    "description": "Configure relevant Kentik Resources to support our use case",
    "tags": [],
    "title": "Task 1.2 - Portal Configuration",
    "uri": "/PartnerWorskhop/lab-01/task_2/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.2 - Alerting",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 2.2 - Traffic Alerting",
    "uri": "/PartnerWorskhop/lab-02/task_2/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.3 - Synthetics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 3.2 - Agent-to-Agent Tests",
    "uri": "/PartnerWorskhop/lab-03/task_2/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.4 - Custom Metrics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 4.2 - Title",
    "uri": "/PartnerWorskhop/lab-04/task_2/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "This section will familiarize you with the network topology that we are going to be using throughout this workshop.\nWhile we go through the topology, please, access the LAB link and start LAB.1 that will take about 5 minutes to load and set things up for us.\nDC Devices Hostname Mgmt IP Lo0 RID Lo1 VTEP ASN P2P Subnet Credentials spine1 172.20.20.101 10.1.250.1 NA 65500 10.1.1/24 admin/admin spine2 172.20.20.102 10.1.250.2 NA 65500 10.1.2/24 —//— leaf1 172.20.20.11 10.1.250.11 10.1.251.11 65501 NA —//— leaf2 172.20.20.12 10.1.250.12 10.1.251.12 65502 NA —//— bleaf 172.20.20.13 10.1.250.13 10.1.251.13 65503 NA —//— wan 172.20.20.50 10.11.250.1 NA 64512 10.11/16 —//— DC Hosts Hostname Mgmt IP VLAN Eth0 IP Credentials fe_host1 172.20.20.15 110 172.16.110.11 user/multit00l be_host1 172.20.20.16 111 172.16.111.11 –//– fe_host2 172.20.20.17 110 172.16.110.12 –//– be_host2 172.20.20.18 111 172.16.111.12 –//– syn_leaf1 172.20.20.21 113 172.16.112.11 admin/admin syn_leaf2 172.20.20.22 113 172.16.112.12 –//– syn_leaf3 172.20.20.23 113 172.16.112.13 –//– Externals Hostname Mgmt IP Role Eth0 IP Credentials custa_host1 172.20.20.151 Customer 192.168.120.11 user/multit00l asn600_host1 172.20.20.161 Transit 192.168.160.11 —//— asn700_host1 172.20.20.171 NA 192.168.170.11 —//— asn800_host1 172.20.20.181 PNI 192.168.180.11 —//— Applications Port(s) From To https/443 Internal External https/443 External Internal https/443 External External tcp/5800-5803 External Frontend tcp/7910 CustA External postgresql/5432 Frontend Backend tcp/7910 Frontend Frontend tcp/8213 Backend Backend tcp/4443 Backend Externals",
    "description": "This section will familiarize you with the network topology that we are going to be using throughout this workshop.\nWhile we go through the topology, please, access the LAB link and start LAB.1 that will take about 5 minutes to load and set things up for us.\nDC Devices Hostname Mgmt IP Lo0 RID Lo1 VTEP ASN P2P Subnet Credentials spine1 172.20.20.101 10.1.250.1 NA 65500 10.1.1/24 admin/admin spine2 172.20.20.102 10.1.250.2 NA 65500 10.1.2/24 —//— leaf1 172.20.20.11 10.1.250.11 10.1.251.11 65501 NA —//— leaf2 172.20.20.12 10.1.250.12 10.1.251.12 65502 NA —//— bleaf 172.20.20.13 10.1.250.13 10.1.251.13 65503 NA —//— wan 172.20.20.50 10.11.250.1 NA 64512 10.11/16 —//— DC Hosts Hostname Mgmt IP VLAN Eth0 IP Credentials fe_host1 172.20.20.15 110 172.16.110.11 user/multit00l be_host1 172.20.20.16 111 172.16.111.11 –//– fe_host2 172.20.20.17 110 172.16.110.12 –//– be_host2 172.20.20.18 111 172.16.111.12 –//– syn_leaf1 172.20.20.21 113 172.16.112.11 admin/admin syn_leaf2 172.20.20.22 113 172.16.112.12 –//– syn_leaf3 172.20.20.23 113 172.16.112.13 –//– Externals Hostname Mgmt IP Role Eth0 IP Credentials custa_host1 172.20.20.151 Customer 192.168.120.11 user/multit00l asn600_host1 172.20.20.161 Transit 192.168.160.11 —//— asn700_host1 172.20.20.171 NA 192.168.170.11 —//— asn800_host1 172.20.20.181 PNI 192.168.180.11 —//— Applications Port(s) From To https/443 Internal External https/443 External Internal https/443 External External tcp/5800-5803 External Frontend tcp/7910 CustA External postgresql/5432 Frontend Backend tcp/7910 Frontend Frontend tcp/8213 Backend Backend tcp/4443 Backend Externals",
    "tags": [],
    "title": "Topology",
    "uri": "/PartnerWorskhop/topology/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "Data Collection Flow Information Basics Flow Directionality Data Enrichment Process Kentik Data Engine Lab.1 Tasks Task 1.1 - Device DiscoveryDeploy Universal Agent and Onboard Devices into Kentik NMS\nTask 1.2 - Portal ConfigurationConfigure relevant Kentik Resources to support our use case\nTask 1.3 - Enabling FlowPerform required steps to ingest flow from devices\nTask 1.4 - Portal VerificationVerify visibility in the portal",
    "description": "Data Collection Flow Information Basics Flow Directionality Data Enrichment Process Kentik Data Engine Lab.1 Tasks Task 1.1 - Device DiscoveryDeploy Universal Agent and Onboard Devices into Kentik NMS\nTask 1.2 - Portal ConfigurationConfigure relevant Kentik Resources to support our use case\nTask 1.3 - Enabling FlowPerform required steps to ingest flow from devices\nTask 1.4 - Portal VerificationVerify visibility in the portal",
    "tags": [],
    "title": "Lab.1 - Onboarding",
    "uri": "/PartnerWorskhop/lab-01/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.1 - Onboarding",
    "content": "Enable Flow cap OR Deploy Kproxy\nDeploy KBGP / Portal BGP settings\nStep.1 - Device Configuration for Flow spine/leave: sflow tunnel/decode Sending IP / Sampling rate / Flow plan / Device type / SNMP for flow enrichment Step.2 - Deploy kBGP device config Step.3 - Enable Flow Deploy kproxy OR add Flow cap Step.4 - Title Step.5 - Title",
    "description": "Perform required steps to ingest flow from devices",
    "tags": [],
    "title": "Task 1.3 - Enabling Flow",
    "uri": "/PartnerWorskhop/lab-01/task_3/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.2 - Alerting",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 2.3 - DDoS Alerting",
    "uri": "/PartnerWorskhop/lab-02/task_3/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.3 - Synthetics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 3.3 - Title",
    "uri": "/PartnerWorskhop/lab-03/task_3/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.4 - Custom Metrics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 4.3 - Title",
    "uri": "/PartnerWorskhop/lab-04/task_3/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "Brief Overview of Alerting Engine\nTask 2.1 - NMS AlertingShort Description\nTask 2.2 - Traffic AlertingShort Description\nTask 2.3 - DDoS AlertingShort Description\nTask 2.4 - TitleShort Description",
    "description": "Brief Overview of Alerting Engine\nTask 2.1 - NMS AlertingShort Description\nTask 2.2 - Traffic AlertingShort Description\nTask 2.3 - DDoS AlertingShort Description\nTask 2.4 - TitleShort Description",
    "tags": [],
    "title": "Lab.2 - Alerting ",
    "uri": "/PartnerWorskhop/lab-02/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.1 - Onboarding",
    "content": "Step.1 - Verify Kentik NMS ME / Device Page 1,2 asks Step.2 - Verify Netflow DE 1,2 asks Step.3 - Kentik Map Show topo Ask to show host2host filter Step.4 - Title Step.5 - Title",
    "description": "Verify visibility in the portal",
    "tags": [],
    "title": "Task 1.4 - Portal Verification",
    "uri": "/PartnerWorskhop/lab-01/task_4/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.2 - Alerting",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 2.4 - Title",
    "uri": "/PartnerWorskhop/lab-02/task_4/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.3 - Synthetics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 3.4 - Title",
    "uri": "/PartnerWorskhop/lab-03/task_4/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab \u003e  Lab.4 - Custom Metrics",
    "content": "Step.1 - Title Step.2 - Title Step.3 - Title Step.4 - Title Step.5 - Title",
    "description": "Short Description",
    "tags": [],
    "title": "Task 4.4 - Title",
    "uri": "/PartnerWorskhop/lab-04/task_4/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "Brief Overview of Synthetics\nTask 3.1 - Deploy AgentsShort Description\nTask 3.2 - Agent-to-Agent TestsShort Description\nTask 3.3 - TitleShort Description\nTask 3.4 - TitleShort Description",
    "description": "Brief Overview of Synthetics\nTask 3.1 - Deploy AgentsShort Description\nTask 3.2 - Agent-to-Agent TestsShort Description\nTask 3.3 - TitleShort Description\nTask 3.4 - TitleShort Description",
    "tags": [],
    "title": "Lab.3 - Synthetics",
    "uri": "/PartnerWorskhop/lab-03/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "Theory and LAB description\nTask 4.1 - TitleShort Description\nTask 4.2 - TitleShort Description\nTask 4.3 - TitleShort Description\nTask 4.4 - TitleShort Description",
    "description": "Theory and LAB description\nTask 4.1 - TitleShort Description\nTask 4.2 - TitleShort Description\nTask 4.3 - TitleShort Description\nTask 4.4 - TitleShort Description",
    "tags": [],
    "title": "Lab.4 - Custom Metrics",
    "uri": "/PartnerWorskhop/lab-04/index.html"
  },
  {
    "breadcrumb": "",
    "content": "A workshop towards getting the HOL Kentik picture",
    "description": "A workshop towards getting the HOL Kentik picture",
    "tags": [],
    "title": "Kentik - Hands On Lab",
    "uri": "/PartnerWorskhop/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/PartnerWorskhop/categories/index.html"
  },
  {
    "breadcrumb": "Kentik - Hands On Lab",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/PartnerWorskhop/tags/index.html"
  }
]
