import CardList from "@/components/CardList"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Bloivating Major</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT  */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badge */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            Badge
          </div>
          {/* Information  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            Info
          </div>
          {/* Card List */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT  */}
        <div className="w-full xl:w-2/3 space-y-6">
        {/* User Card Container */}
        <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
          User Card
        </div>

        {/* Chart Container */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          Chart Container
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
