using System.Xml;

namespace DataManager
{
    public static class Crane
    {
        public static Dictionary<string, object> pos = new Dictionary<string, object>()
        {
            {"X", 0},
            {"Y", 0},
            {"Z", 0},


        };

        public static Dictionary<string, object> axis = new Dictionary<string, object>()
        {
            {"X", 0},
            {"Y", 0},
            {"Z", 0},
            {"Grab", false}

        };




    }


    public static class TargetContainer     {
        
        public static Dictionary<string, object> pos = new Dictionary<string, object>()
        {
            {"X", 0},
            {"Y", 0},
            {"Z", 0},
            {"picked", false},
            {"exist", false}
        };

    }

    public static class Train { 
    
        public static Dictionary<string, object> pos = new Dictionary<string, object>()
        {
            {"X", 0},
            {"Y", 0},
            {"Z", 0},
            {"TrainLoaded", false}
        };
    }
}
