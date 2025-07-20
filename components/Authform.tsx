
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  
} from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/Firebase/client"
import { signIn, signUp } from "@/lib/actions/auth.action"





const authformSchema = (type:FormType) => z.object({
    name: type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6).max(100),
})


const AuthForm = ({type}: {type: FormType}) => {
    const router = useRouter();
    const formSchema = authformSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
        if(type === "sign-in"){
            // Handle sign-in logic
            const { email, password } = values;
            const usercredentials = await signInWithEmailAndPassword(auth, email, password);
            const idtoken = await usercredentials.user.getIdToken();
            if(!idtoken){
                toast.error("Failed to get ID token");
              }
              await signIn({
                email,
                idToken: idtoken
              });

            toast.success("Signed in successfully");
            router.push("/");
        } else {
            // Handle sign-up logic
           const{ name , email , password} = values;
           const usercredentials = await createUserWithEmailAndPassword(auth,email,password);
          const result = await signUp({
            uid: usercredentials.user.uid,
            name: name!,
            email,
            password
          });
          toast.success("Signed up successfully");
          if(!result?.success){
            toast.error(result?.message);
            return;
          }
        form.reset();
    }
  }
    catch(err){
        console.log(err);
        toast.error(`Something went wrong: ${err}`);
    }
  }
const issignin = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={32}/>
                <h2 className="text-primary-100">Prepwise</h2>
            </div>
            <h3>Practice job interviews with Ai</h3>
        
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
        {!issignin && <FormField control={form.control} name="name" label="Name" placeholder ="enter your name"/>}
        <FormField control={form.control} name="email" label="Email" placeholder ="enter your email"/>
        <FormField control={form.control} name="password" label="Password" type="password" placeholder ="enter your password"/>
        <Button className="btn" type="submit">{issignin ? "Sign In" : "Create an account"  }</Button>
      </form>
    </Form>
    <p className="text-center">{issignin ? "Don't have an account?" : "Already have an account?"}
        <Link href={issignin ? "/sign-up" : "/sign-in"} className="font-bold text-user-primary ml-1">
          {issignin ? "Sign Up" : "Sign In"}
        </Link>
    </p>


    </div>
    </div>
  )
}

export default AuthForm;