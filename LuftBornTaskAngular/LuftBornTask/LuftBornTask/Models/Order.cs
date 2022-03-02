using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LuftBornTask
{
    /// <summary>
    /// Orders Modal
    /// </summary>
    public class Order
    {

        public Order()
        {
            OrderDetails=new List<OrderDetails>();
        }
        [Key]
        public int Id { get; set; }
        public decimal OrderTotlPrice { get; set; }
        public DateTime OrderDate { get; set; }

        public virtual List<OrderDetails> OrderDetails { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual Users Users { get; set; }

    }
}
