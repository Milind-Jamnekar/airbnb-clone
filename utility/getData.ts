export async function getData<T>(url: string) {
  const exploreData = await fetch(url);
  const data = await exploreData.json();
  return data;
}
export async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

// example consuming code
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// const data = await http<Todo[]>("https://jsonplaceholder.typicode.com/todos");
