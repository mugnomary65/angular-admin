using AutoMapper;
using angular_admin.Models;

namespace angular_admin.Models.Mappings 
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
              CreateMap<UserInfo,ApplicationUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Password));
        }
    }
}