import { Badge } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-20 bg-[#121212] text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Join Our Journey</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the future of architectural glass with SR Lumex. Schedule a consultation with our experts to
            discover the perfect smart glass solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA