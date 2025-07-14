import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitForm } from "../services/DashboardApi"



const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
   owner: z.string().min(2, {
    message: "owner name must be at least 2 characters.",
  }),
    description: z.string().min(2, {
    message: "owner name must be at least 2 characters.",
  }),
  tags: z.string().optional(),
})

export interface ActivityFormInput {
  name: keyof z.infer<typeof FormSchema>;
  label:string;
  placeHolder:string,
}

const formInput:ActivityFormInput[] = [
  {name:"name",label:"Name",placeHolder:"Enter your Name"},
  {name:"owner",label:"Owner",placeHolder:"Enter owner Name"},
  {name:"tags",label:"Tags",placeHolder:"Enter tags separated by commas (e.g. ai, ml, web)"},
]
const ActivityForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      owner:"",
      description:"",
      tags:""
    },
  })

async function onSubmit(data: z.infer<typeof FormSchema>) {
  const parsedData = {
    ...data,
    tags: data.tags?.split(",").map(tag => tag.trim()).filter(Boolean) || []
  }
  try {
    await submitForm(parsedData);
    toast("Add successfully", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(parsedData, null, 2)}</code>
        </pre>
      ),
    })
  } catch (error) {
     toast("error", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-red-500 p-4">
          <code className="text-white">{JSON.stringify(error, null, 2)}</code>
        </pre>
      ),
    })
  }

}

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 max-md:w-full">
      {formInput.map(((val:ActivityFormInput)=><FormField
          key={val.label}
          control={form.control}
          name={val.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{val.label}</FormLabel>
              <FormControl>
                <Input placeholder={val.placeHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          
        />))}

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter you Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    
     
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ActivityForm
