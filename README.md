# CommuteOS

A corporate mobility platform that groups employees by location and suggests smarter ways to commute — carpool, metro, or shuttle. Built as a startup idea to cut commute costs and reduce traffic for companies.

**Live demo:** https://commute-os-nitin-gandla-s-projects.vercel.app/

---

## What it does

- Employees register with their location and preferred transport
- The backend groups them based on proximity
- Suggests the best ride option (carpool, metro, shuttle)
- Admin dashboard shows fleet usage, seat occupancy, and carbon savings

---

## Tech Stack

### Frontend
| Tool | Why |
|---|---|
| Next.js 15 | React framework with file-based routing |
| TypeScript | Catches bugs before they happen |
| Tailwind CSS | Fast styling without writing much CSS |
| Vercel | Deploys automatically on every push |

### Backend
| Tool | Why |
|---|---|
| Node.js + Express | Simple REST API setup |
| JavaScript | Quick to write and iterate |

---

## Why this stack works

- Next.js makes the frontend fast and SEO-friendly out of the box
- Tailwind keeps the UI consistent without a design system
- Vercel auto-deploys on every push — zero manual work
- TypeScript catches a lot of silly mistakes before they hit production
- Express keeps the backend simple and easy to extend

---

## Folder Structure

```
CommuteOS/
├── CommuteOS/          # Next.js frontend
│   ├── components/
│   ├── app/
│   └── ...
└── commuteos-backend/  # Express backend
    └── ...
```

---

## Running locally

```bash
# Frontend
cd CommuteOS
npm install
npm run dev

# Backend
cd commuteos-backend
npm install
npm run dev
```

---

## How to use

1. Open the [live app](https://commute-os-nitin-gandla-s-projects.vercel.app/)
2. Scroll to the **Add Employee** section
3. Fill in the employee name, location, and preferred transport (carpool, metro, or shuttle)
4. Hit **Add Employee** — the backend groups them based on location
5. Check the **Admin Dashboard** section to see fleet stats, seat occupancy, and active routes
6. The **Ride Groups** section shows how employees are clustered by proximity

> To run it locally, see the Running locally section below.

---

## Highlights

- Location-based ride grouping — employees are matched by where they live
- Live admin dashboard with seat occupancy, active routes, and CO₂ saved
- Employee app UI showing real-time ETAs, ride sharing, and commute wallet
- Built-in ESG tracking — carbon savings calculated per employee per month
- Instant deploys — every push to main goes live on Vercel automatically
