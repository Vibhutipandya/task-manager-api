from pydantic import BaseModel, EmailStr, Field

# -------- USERS --------
class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str


# -------- TASKS --------
class TaskCreate(BaseModel):
    title: str = Field(min_length=1)
    description: str | None = None

class TaskResponse(BaseModel):
    id: int
    title: str
    description: str | None

    class Config:
        from_attributes = True