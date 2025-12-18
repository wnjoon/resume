---
layout: default
title: Wonjoon Lee - Resume
---

<style>
  header { 
    display: none !important; 
  }

  footer {
    display: none !important;
  }

  section {
    width: 100% !important;
    float: none !important;
    margin: 0 auto !important;
    padding: 30px 0 !important;
    max-width: 900px !important;
  }

  .wrapper {
    max-width: 900px !important;
    margin: 0 auto !important;
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }

  .contact-link + .contact-link {
    border-left: 1px solid currentColor;
    padding-left: 12px;
    margin-left: 12px;
  }
</style>

# Wonjoon Lee
### Software Engineer

<div class="contact-links">
  <span class="contact-link"><a href="mailto:wnjoon@gmail.com">wnjoon@gmail.com</a></span>
  <span class="contact-link"><a href="https://www.linkedin.com/in/wonjoon/">LinkedIn</a></span>
  <span class="contact-link"><a href="https://github.com/wnjoon">GitHub</a></span>
  <span class="contact-link"><a href="https://wnjoon.github.io/">Blog</a></span>
</div>

<br>

## SUMMARY

**Software Engineer** with a solid foundation in distributed systems and blockchain, expanding my focus to solve complex real-world challenges across diverse domains. Adept at leveraging AI-driven workflows to rapidly adapt to new technologies and maximize development efficiency. Passionate about building reliable, high-impact systems through the purposeful application of technology.

<br>


## PROFESSIONAL EXPERIENCE

### Globaleur
**Lead Backend Engineer** | *CA, United States* | *May 2025 – Present* | Remote

* Decoupled the travel route generation system from a monolithic architecture into independent frontend and backend services, significantly improving maintainability and deployment agility.
* Redesigned the storage layer using interface-driven patterns to allow flexible database implementations, while identifying and resolving structural bottlenecks and potential performance issues.
* Refactored the application bootstrapping process to strictly separate component initialization from runtime execution, resulting in a cleaner entry point and enhanced code modularity.


### B-Harvest
**Blockchain Core R&D Engineer** | *Seoul, South Korea* | *Nov 2024 – Apr 2025* | Hybrid

* Contributed to core logic improvements and stability fixes for Cosmos SDK-based Appchains, actively collaborating with the global open-source community.
* Led critical security enhancements for the **[Babylon](https://github.com/babylonlabs-io/babylon)** mainnet by decoupling BLS keys and implementing ERC2335 standards, ensuring robust validator key management.
* Re-architected the storage logic for the **[BTC Staker](https://github.com/babylonlabs-io/btc-staker)** module to remove redundant state data and eliminated unused legacy logic (watch-staking, post-approval), significantly reducing database size and improving node synchronization speed.

### Redwit
**Blockchain Software Engineer** | *Daejeon, South Korea* | *Jun 2024 – Nov 2024* | Remote

* Successfully migrated Hyperledger Fabric networks to **Google Kubernetes Engine (GKE)**, designing scalable cluster configurations (CA, Peer, Orderer).
* Developed script-based tools for automated node management (scaling, certificate rotation), reducing operational overhead by simplifying complex manual processes.
* Established a comprehensive monitoring stack using Prometheus and Grafana to visualize network metrics and ensure high availability.

### LG CNS
**Senior Software Engineer** | *Seoul, South Korea* | *May 2023 – Nov 2024* | Onsite

* Architected and developed a high-throughput Security Token issuance and distribution platform using **Hyperledger Besu**.
* Built an asynchronous transaction processing engine using Kafka and a real-time block listener, optimizing the system for high-volume financial events.
* Developed a scalable API gateway to orchestrate communication between diverse internal microservices.
* Implemented customized ERC20/ERC1400 smart contracts to meet specific Korean financial regulations, including logic for Whitelisting and Multi-party trading.

### Samsung Securities
**Software Engineer** | *Seoul, South Korea* | *Feb 2022 – May 2023* | Onsite

* Architected and developed a high-throughput Security Token issuance and distribution platform using **Quorum**.
* Implemented an on-chain order book and customized ERC20/ERC1400 contracts to facilitate decentralized trading, ensuring system reliability through comprehensive testing scenarios.
* Re-architected the multi-signature wallet system, enabling secure off-chain signature generation and pre-confirmation workflows.
* Developed a specialized Private Ethereum client to handle proprietary event listening and node monitoring requirements.

### LG CNS
**Senior Software Engineer** | *Seoul, South Korea* | *Jul 2018 – Feb 2022* | Hybrid

* Designed the system architecture for an NFT platform connecting **Hyperledger Fabric** with Public Mainnets, including CEX wallet integration.
* Prototyped and tested an Ethereum-based NFT marketplace, implementing core smart contract functionalities for token minting and trading to validate technical feasibility.
* Analyzed requirements for the Bank of Korea's CBDC pilot, proposing optimal data structures and system designs for high-scale currency operations.
* Developed Hyperledger Fabric chaincodes and client applications adaptable to various business environments, ensuring flexibility across different industry use cases.
* Designed and configured Hyperledger Fabric network nodes, optimizing peer, orderer, and CA structures for stable private blockchain operations.

### Ever More Security
**Lead Software Engineer** | *TX, United States* | *Jan 2016 – Mar 2018* | Onsite

* Developed "Non-Addressable Data Protection (NADP)" software to secure internal networks by eliminating IP-based access surfaces.
* Invented and patented a **real-time dynamic key exchange mechanism** for secure communication sessions.

<br>

## OPEN SOURCE CONTRIBUTIONS

**[Babylon](https://github.com/babylonlabs-io/babylon)**
* Decoupled BLS keys from `priv_validator_key.json` to enhance validator security and implemented ERC2335 keystore standards.
    * **PRs:** [#396](https://github.com/babylonlabs-io/babylon/pull/396), [#434](https://github.com/babylonlabs-io/babylon/pull/434), [#471](https://github.com/babylonlabs-io/babylon/pull/471), [#558](https://github.com/babylonlabs-io/babylon/pull/558)
* Refactored the vote extension mechanism to remove dependencies on local FilePV, enabling support for remote signers in validator setups.
    * **PRs:** [#462](https://github.com/babylonlabs-io/babylon/pull/462)
* Improved CLI UX by adding proper file checks and password prompts for BLS-related commands.
    * **PRs:** [#682](https://github.com/babylonlabs-io/babylon/pull/682), [#850](https://github.com/babylonlabs-io/babylon/pull/850), [#871](https://github.com/babylonlabs-io/babylon/pull/871), [#924](https://github.com/babylonlabs-io/babylon/pull/924)

**[BTC Staker](https://github.com/babylonlabs-io/btc-staker)**
* Removed legacy logic (watch-staking) and improved test coverage to streamline the codebase.
    * **PRs:** [#131](https://github.com/babylonlabs-io/btc-staker/pull/131), [#157](https://github.com/babylonlabs-io/btc-staker/pull/157)
* Refactored database schema to remove redundant state storage between modules, significantly reducing disk usage.
    * **PRs:** [#134](https://github.com/babylonlabs-io/btc-staker/pull/134)

<br>

## SKILLS

* **Languages:** Golang, Solidity, Java, JavaScript/TypeScript, C/C++
* **Blockchain:** Ethereum (Geth, Besu, Quorum), Hyperledger Fabric, Cosmos SDK
* **Infrastructure & Tools:** Docker, Kubernetes, Kafka, Foundry, Truffle, Hardhat

<br>

## PAPERS / PRESENTATIONS

* [Dynamic key exchange system for independent cryptographic key generation per session](http://www.riss.kr/link?id=T14771241)
* [Performance comparison by key length of AES encryption using Non-Addressable Data Protection Devices](https://www.koreascience.or.kr/article/CFKO201735553776135.pdf)
* [A Performance Simulator for DDS Network](https://ieeexplore.ieee.org/document/7057868)
* [A full-duplex listening structure for network and application monitoring](https://ieeexplore.ieee.org/document/7028691)

<br>

## EDUCATION

**M.S. in Computer Science** 
  * *Chungnam National University (Feb 2018)*
  
**B.S. in Computer Science** 
  * *Chungnam National University (Feb 2014)*
