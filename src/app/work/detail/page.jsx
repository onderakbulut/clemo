import WorkContent from "@/components/work-content/work-content";
import Related from "@/components/related/related";

function WorkDetail() {
    return (  
        <div className='pt-40 pt-lg-85'>
            <div className='text-center fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>golfino awards</div>
            <WorkContent />
            <Related />
        </div>
    );
}

export default WorkDetail;