import SigninButton from "@/components/SigninButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getAuthSession();
    if (session?.user) {
      //that means the user is logged in
      return redirect('/dashboard');
    }
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Welcome to AI Quiz</CardTitle>
              <CardDescription>
                AI Quiz is a app that allows you to create and share quiz with your friends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SigninButton text="Sign in with Google"/>
            </CardContent>
        </Card>
    </main>
  );
}
