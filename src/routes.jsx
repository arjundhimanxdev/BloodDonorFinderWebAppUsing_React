import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layout";
import { AboutMePage, DonorsPage, SettingPage, HomePage, ContactUsPage, DonorsFormPage, DonorDetailsPage} from "./pages";


const AppRoutes = () => {
  return (
    <>
    <Suspense
        fallback={<div className="text-black">Page is loading...</div>}>
            <Routes>
               <Route element={<PublicLayout/>}>
                 <Route path="/" element={<HomePage />}>
                     <Route path="donors" element={<DonorsPage />} />
                     <Route path="about-us" element={<AboutMePage />} />
                     <Route path="contact-us" element={<ContactUsPage />} />
                     <Route path="setting" element={<SettingPage />} />
                     <Route path="donors/add" element={<DonorsFormPage />} />
                     <Route path="/donors/:id" element={<DonorDetailsPage />}/>
                 </Route>
                 
               </Route>
                <Route path="*" element={<Navigate to="/" replace />}/>

            </Routes>

    </Suspense>
    
    </>
  )
}

export default AppRoutes; 
