using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LuftBornTask
{

    /// <summary>
    /// Users Modal
    /// </summary>
    public class Users
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Display(Name = "User Name")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Please Enter Password...")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Please Enter Email...")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        //[Required(ErrorMessage = "Please Enter the Confirm Password...")]
        //[DataType(DataType.Password)]
        //[Display(Name = "Confirm Password")]
        //[Compare("Password")]
        //public string Confirmpwd { get; set; }
        [Required(ErrorMessage = "Please Enter Full Name...")]
        public string FullName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Phone No")]
        public string PhoneNo { get; set; }

        public int UserRoleId { get; set; }
        [ForeignKey("UserRoleId")]
        public virtual UserRoles UserRole { get; set; }
    }
}
