Here’s a clear **load balancer architecture diagram** you can use 👇

---

## 🖥️ Basic Load Balancer Diagram

```text
                    ┌───────────────┐
                    │    Clients    │
                    │ (Browsers /   │
                    │  Apps / APIs) │
                    └──────┬────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   Load Balancer     │
                │  (Rust Service)     │
                └──────┬──────┬───────┘
                       │      │
        ┌──────────────┘      └──────────────┐
        ▼                                     ▼
┌───────────────┐                   ┌───────────────┐
│  Backend A    │                   │  Backend B    │
│  (Port 3001)  │                   │  (Port 3002)  │
└───────────────┘                   └───────────────┘
        │                                     │
        └──────────────┬──────────────────────┘
                       ▼
               ┌───────────────┐
               │  Backend C    │
               │  (Port 3003)  │
               └───────────────┘
```

---

## 🔄 Request Flow (Step-by-step)

```text
1. Client sends request
        ↓
2. Load Balancer receives request
        ↓
3. Select backend (Round Robin / etc.)
        ↓
4. Forward request to backend
        ↓
5. Backend processes request
        ↓
6. Response goes back through Load Balancer
        ↓
7. Client receives response
```

---

## 🧠 With Health Checks Added

```text
                ┌─────────────────────┐
                │   Load Balancer     │
                │                     │
                │  ┌───────────────┐  │
                │  │ Health Check  │──┼───► Backend A
                │  └───────────────┘  │
                │                     ├───► Backend B
                │                     │
                │                     └───► Backend C
                └─────────────────────┘
```

* Load balancer periodically checks `/health`
* If a backend fails → it is skipped

---

## ⚙️ Advanced (Production-Level View)

```text
           ┌──────────────┐
           │    Clients   │
           └──────┬───────┘
                  ▼
        ┌─────────────────────┐
        │   Load Balancer     │
        │  - Routing          │
        │  - Health Checks    │
        │  - Rate Limiting    │
        │  - Logging          │
        └──────┬──────────────┘
               ▼
     ┌─────────────────────────────┐
     │     Backend Cluster         │
     │ ┌────────┐ ┌────────┐       │
     │ │ Node A │ │ Node B │ ...   │
     │ └────────┘ └────────┘       │
     └─────────────────────────────┘
```

---

## 💡 Tip

If you're writing this in a **blog or documentation**, you can also convert this into:

* **Mermaid diagram** (for GitHub README)
* **Draw.io / Excalidraw** visuals

---

If you want, I can generate:

* a **Mermaid version (copy-paste ready for GitHub)**
* or a **beautiful system design diagram (image style)**

Just tell me 👍
