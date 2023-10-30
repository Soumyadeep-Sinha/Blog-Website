import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogPost, User } from '../datatype';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private userDataKey = 'userData';
  private isAuthorisedKey = "authKey"

  constructor(private http : HttpClient) { }

  registerUser(data: User) {
    return this.http.post("http://localhost:8080/api/v1/users/signUp", data);
  }

  loginUser(data: any) {
    return this.http.post("http://localhost:8080/api/v1/users/login", data);
  }

  isAllowed = false;

  setUser(user: any) {
    localStorage.setItem(this.userDataKey, JSON.stringify(user));
    localStorage.setItem(this.isAuthorisedKey, this.isAllowed.toString());

    if(user) this.isAllowed = true;

    console.log('User is set');
    console.log(user);
  }

  getUser(): User | null {
    const userData = localStorage.getItem(this.userDataKey);
    return userData ? JSON.parse(userData) : null;
  }

  getValidation():boolean{
    const auth = localStorage.getItem(this.isAuthorisedKey);
    return auth ? true : false;
  }

  clearUser() {
    localStorage.removeItem(this.userDataKey);
    localStorage.removeItem(this.isAuthorisedKey);
    this.isAllowed = false;
    console.log('User data cleared');
  }

  updateUser(data: User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/api/v1/users/updateUser", data)
  }

  createBlog(data: BlogPost) {
    return this.http.post("http://localhost:8080/api/v1/blog/create", data);
  }

  getBlogById(data:number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/v1/blog/getblog/${data}`);
  }

  getAllBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>("http://localhost:8080/api/v1/blog/getAllBlogs");
  }

  getBlogByUserId(data:number): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`http://localhost:8080/api/v1/blog/getBlogsByUserId/${data}`);
  }

  getSize(): Observable<number>{
    return this.http.get<number>("http://localhost:8080/api/v1/blog/getSize")
  }

  deleteBlog(data: number): Observable<void> {
    return this.http.get<void>(`http://localhost:8080/api/v1/blog/deleteBlog/${data}`);
  }
}
