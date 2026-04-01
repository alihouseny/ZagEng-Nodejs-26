#  Session 14 — Networking 

## Why Do We Need to Learn Networking?

Understanding networking helps us know:
- **How the backend communicates with the frontend**
- The full journey of a **request** (from the user clicking something → all the way to getting a response back)
- What **HTTP/HTTPS** means
- What a **request** is made of
- How a **response** comes back to the user

---

##  What is a Network?

A **network** is a group of devices connected together (via wire or wirelessly) to **share data**.

- The device **sending** data → called the **Sender**
- The device **receiving** data → called the **Receiver**
- They communicate using a shared language called **Protocols**

---

##  What are Protocols?

Protocols are **rules that define how devices communicate** with each other. They determine:
- The **format** of the data being sent
- The **order** in which data arrives at the receiver

---

##  Most Common Protocols

### 1. HTTP / HTTPS
- The protocol used for communication **between the frontend and backend**

### 2. TCP (Transmission Control Protocol)
- Responsible for **transferring data reliably**
- Confirms **every piece of data arrived correctly and in order**
- Slightly **slower**, but accurate
- Used in **banking transactions** where correctness matters more than speed

### 3. UDP (User Datagram Protocol)
- Also transfers data, but **faster than TCP**
- May **lose some data** along the way
- Best suited for **Streaming, Games, and Voice/Video Calls**

### 4. SMTP (Simple Mail Transfer Protocol)
- Responsible for **sending emails**
- Allows your server to send emails to users

---

##  Request–Response Cycle

This is the full journey of a request, step by step:

```
Frontend → DNS → Application Layer → Transport Layer → Network Layer → Server
                                                                          ↓
Frontend ← Application Layer ← Transport Layer ← Network Layer ← Response Back
```

| Step | What Happens |
|------|-------------|
| 1 | The HTTP request **leaves the frontend** |
| 2 | Goes to **DNS** → translates the domain name into an IP address |
| 3 | Reaches the **Application Layer** → becomes an HTTP request |
| 4 | Reaches the **Transport Layer** → data is split into chunks and sent via TCP or UDP |
| 5 | Reaches the **Network Layer** → finds the best route to reach the server |
| 6 | Arrives at the **Server** → request is processed, response is created |
| 7 | The **response travels back** the same way in reverse: Network → Transport → Application → Frontend |

---

##  DNS Resolving

**What is an IP address?**
The IP is the **server's address on the internet**. Example:
```
142.250.190.78
```

**What is a Port?**
A port is like a **door** on a device. Each port handles a different service:

| Port | Service |
|------|---------|
| 80   | HTTP    |
| 443  | HTTPS   |
| 3306 | MySQL   |

**The problem:** We can't memorize the IP for every website.

**The solution → DNS!**
The **DNS (Domain Name System)** translates a human-readable domain (like `google.com`) into an IP address automatically.

### DNS Resolution Steps:
1. User types `https://google.com`
2. Browser needs the IP for `google.com`
3. Browser checks its **cache** first
   -  Found → use it directly
   -  Not found → ask the **DNS server**
4. DNS server looks up the IP
5. Returns the IP to the browser → browser sends the HTTP request

---

## HTTP Request

An HTTP request is built by the **frontend** and sent to the server. It's how the frontend says:
- *"Give me this data"*
- *"Log me in"*
- *"Save this data"*

### Structure of an HTTP Request:

| Part | Description |
|------|-------------|
| **Method** | Type of request (GET, POST, etc.) |
| **URL** | The address the request is going to |
| **Headers** | Extra information (metadata) |
| **Body** | Data being sent (optional) |
| **Query Params** | Additional data passed in the URL |

---

##  HTTP Methods

### 1. `GET` — Read Data
- Fetches data only (**Read-only**)
- **No body**

```http
GET /users
```
> Returns all users.

---

### 2. `POST` — Create Data
- Used to **create a new record**
- Common uses: Register, Login, Add an item
- **Has a body** (usually JSON)

```http
POST /users

{
  "name": "Shams",
  "email": "shams@gmail.com"
}
```

---

### 3. `PUT` — Full Update
- **Replaces all fields** of a record

```http
PUT /users/1

{
  "name": "New Name",
  "email": "new@gmail.com"
}
```
> The `/1` here is a **path parameter** — it identifies which user to update.

---

### 4. `PATCH` — Partial Update
- Updates **only specific fields** (not the whole record)

```http
PATCH /users/1

{
  "name": "New Name"
}
```

---

### 5. `DELETE` — Delete Data
- Removes a record
- **No body**

```http
DELETE /users/1
```

---

##  Query Parameters

Used to pass data **in the URL** (different from path parameters).

```
/products?category=shoes
/users?page=2&limit=10
```

- **Path parameter** → required, part of the route (`/users/1`)
- **Query parameter** → optional, appended after `?`

>  Never put sensitive data (like passwords) in the URL!

---

## Transport Layer

Responsibilities:
1. Splits data into **chunks**
2. Each chunk gets a **sequence number** (for correct reassembly)
3. If using **TCP** → lost chunks are **resent automatically**
4. Identifies the **port/service** that should receive the data

### TCP vs UDP Comparison:

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable  | Unreliable  |
| Speed | Slower | Faster |
| Ordering | Guaranteed | Not guaranteed |
| Error Handling | Full retransmission | Minimal / none |
| Use Cases | Web, APIs, Emails | Streaming, Games, Calls |

---

##  Network Layer

Responsibilities:
1. Finds the **best route** to deliver data between devices
2. Uses **IP addresses** to identify source and destination
3. Converts data into **packets**
4. Works with **routers** to move data between different networks
5. Chooses the best path if multiple routes exist (**routing decisions**)

---

##  Server Processing

Once the server receives the request:
1. **Analyzes** the request to understand what's needed
2. **Executes** the required logic
3. **Returns** a response

---

##  Response Back

After processing, the server sends the response back through the **same path in reverse**:

```
Network → Transport → Application → Frontend
```

- **Network Layer** → determines the best return route
- **Transport Layer** → verifies all data returned correctly (TCP), reassembles chunks in order
- **Application Layer** → becomes an HTTP response

Example HTTP Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "success"
}
```

The **frontend** then receives and displays the response to the user.

---

##  Status Codes

A **status code** is a number the server returns with the response to indicate what happened.

### 1xx — Informational
- Rarely used, just informational

### 2xx — Success 

| Code | Meaning |
|------|---------|
| 200 | OK — Request succeeded |
| 201 | Created — New resource was created |
| 204 | No Content — Success but no data returned |

### 3xx — Redirection 
- A redirect is needed

### 4xx — Client Errors (Your fault)

| Code | Meaning |
|------|---------|
| 400 | Bad Request — Validation failed |
| 401 | Unauthorized — Need to log in |
| 403 | Forbidden — No permission |
| 404 | Not Found — Resource doesn't exist |
| 405 | Method Not Allowed |
| 422 | Validation Error |

### 5xx — Server Errors  (Server's fault)

| Code | Meaning |
|------|---------|
| 500 | Internal Server Error — Bug on the server |
| 502 | Bad Gateway — Problem between servers |
| 503 | Service Unavailable — Server is down |

---

## Quick Summary

```
User Action
    ↓
Frontend builds HTTP Request
    ↓
DNS resolves domain → IP address
    ↓
Application Layer (HTTP Request formed)
    ↓
Transport Layer (TCP/UDP — data split into chunks)
    ↓
Network Layer (best route found via IP)
    ↓
Server receives → processes → builds response
    ↓
Response travels back (Network → Transport → Application)
    ↓
Frontend displays result to user
```
