package resolver

import "wdda-gql/graph/exec"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{}

func NewResolver() *Resolver {
	return &Resolver{}
}

func NewQueryResolver(
	resolver *Resolver,
) exec.QueryResolver {
	return &queryResolver{
		Resolver: resolver,
	}
}

func NewMutationResolver(
	resolver *Resolver,
) exec.MutationResolver {
	return &mutationResolver{
		Resolver: resolver,
	}
}

func NewSubscriptionResolver(
	resolver *Resolver,
) exec.SubscriptionResolver {
	return &subscriptionResolver{
		Resolver: resolver,
	}

}
