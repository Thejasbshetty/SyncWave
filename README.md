Here’s the updated README for **SyncWave**:

---

# SyncWave - Full-Stack Project Management Tool  

**SyncWave** is an advanced project management tool designed to empower teams to collaborate efficiently, organize tasks effectively, and boost productivity. With features like sprint cycles, issue management, and role-based actions, SyncWave provides everything you need to manage your projects seamlessly.  

---

## Key Features  

### **Organization Management**  
- Create or join organizations.  
- Admin-only ability to invite members to the organization.  

### **Project Management**  
- Multiple projects per organization.  
- Only admins can create new projects and manage team members.  

### **Sprint Management**  
- Create and manage sprint cycles for better task segmentation.  
- Switch between sprints to track team progress.  

### **Issue Management**  
- Add issues to sprints with customizable details.  
- Prioritize issues: **Low**, **Medium**, **High**, **Urgent**.  
- Drag and drop issues across stages: **Todo**, **In Progress**, **In Review**, **Done**.  

### **Filtering and Search**  
- Filter issues based on priority.  
- Search issues by name, assigned user, or priority.  

### **Collaboration Features**  
- Assign issues to specific team members.  
- Track updates and ensure task ownership.  

---

## Technologies Used  

### **Frontend**  
- **Framework**: Next.js  
- **Styling**: Tailwind CSS, ShadCN
- **Forms**: React Hook Form, Zod, @hookform/resolvers  
- **UI Enhancements**: React Spinners, Toast Sonner, React DayPicker  
- **Drag and Drop**: @hello-pangea/dnd  

### **Backend**  
- **Server Actions**: Next.js API Routes  
- **ORM**: Prisma ORM  

### **Database**  
- **Type**: PostgreSQL  
- **Provider**: Neon DB (Serverless PostgreSQL)  

### **Authentication**  
- **Service**: Clerk  

### **Deployment**  
- **Platform**: Vercel  

---

## Access SyncWave  

Explore SyncWave and its features live at [https://syncwave-gules.vercel.app/](https://syncwave-gules.vercel.app/).  

---
